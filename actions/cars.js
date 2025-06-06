"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getAdmin } from "./admin";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { serializeCarData } from "@/lib/helpers";
import { auth } from "@clerk/nextjs/server";

export const fileToBase64 = async (file) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer.toString("base64");
};

export const addNewCar = async ({ carData, images }) => {
  try {
    const admin = await getAdmin();
    if (!admin.authorized) {
      throw new Error("Cannot perform request. You're unauthorized");
    }

    const carId = uuidv4();
    const folderPath = `cars/${carId}`;

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const imageUrls = [];

    for (let i = 0; i < images.length; i++) {
      const base64Data = images[i];

      if (!base64Data || !base64Data.startsWith("data:image/")) {
        console.warn("Skipping invalid image data");
        continue;
      }

      //Extract the base64 part
      const base64 = base64Data.split(",")[1];
      const imageBuffer = Buffer.from(base64, "base64");

      //Determine the file extension from the data url
      const mimeMatch = base64Data.match(/data:image\/([a-zA-Z0-9]+);/);
      const fileExtension = mimeMatch ? mimeMatch[1] : "jpeg";

      //   Create filename
      const fileName = `image-${Date.now()}-${i}.${fileExtension}`;
      const filePath = `${folderPath}/${fileName}`;

      const { data, error } = await supabase.storage
        .from("car-images")
        .upload(filePath, imageBuffer, {
          contentType: `image/${fileExtension}`,
        });

      if (error) {
        console.error("Error uploading image: ", error);
        throw new Error(`Failed to upload image: ${error.message}`);
      }

      const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${filePath}`;

      imageUrls.push(publicUrl);
    }

    if (imageUrls.length === 0) {
      throw new Error("No valid images were uploaded");
    }

    // add car to database
    const newCar = await db.car.create({
      data: {
        id: carId,
        make: carData.make,
        model: carData.model,
        year: carData.year,
        price: carData.price,
        mileage: carData.mileage,
        color: carData.color,
        fuelType: carData.fuelType,
        bodyType: carData.bodyType,
        transmission: carData.transmission,
        seats: carData.seats,
        description: carData.description,
        status: carData.status,
        featured: carData.featured,
        images: imageUrls,
      },
    });

    revalidatePath("/admin/cars");
    return { success: true };
  } catch (error) {
    console.error(error.message);
    throw new Error("Error adding car: " + error.message);
  }
};

export const processCarImageWithAI = async (file) => {
  try {
    //check if api is set
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key not configured");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const base64Image = await fileToBase64(file);
    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: file.type,
      },
    };

    // Define the prompt for car detail extraction
    const prompt = `
        Analyze this car image and extract the following information:
        1. Make (manufacturer)
        2. Model
        3. Year (approximately)
        4. Color
        5. Body type (SUV, Sedan, Hatchback, etc.)
        6. Mileage
        7. Fuel type (your best guess), choose between these Petrol, Diesel, Electric, Hybrid, Plug-in Hybrid
        8. Transmission type (your best guess) choose between these Automatic, Manual, Semi-Automatic
        9. Price (your best guess)
        9. Short Description as to be added to a car listing

        Format your response as a clean JSON object with these fields:
        {
            "make": "",
            "model": "",
            "year": 0000,
            "color": "",
            "price": "",
            "mileage": "",
            "bodyType": "",
            "fuelType": "",
            "transmission": "",
            "description": "",
            "confidence": 0.0
        }

        For confidence, provide a value between 0 and 1 representing how confident you are in your overall identification.
        Only respond with the JSON object, nothing else.
    `;

    const promptResult = await model.generateContent([imagePart, prompt]);
    const response = promptResult.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    try {
      const carDetails = JSON.parse(cleanedText);

      const requiredFields = [
        "make",
        "model",
        "year",
        "color",
        "price",
        "mileage",
        "bodyType",
        "fuelType",
        "transmission",
        "description",
        "confidence",
      ];

      console.log(carDetails);

      const missingFields = requiredFields.filter(
        (field) => !(field in carDetails)
      );

      if (missingFields.length > 0) {
        throw new Error(
          `AI response missing required fields: ${missingFields.join(", ")}`
        );
      }

      return { success: true, data: carDetails };
    } catch (error) {
      console.error("Failed to parse AI response: ", error);
      return { success: false, error: "Failed to parse AI response" };
    }
  } catch (error) {
    throw new Error("Gemini API Error: " + error.message);
  }
};

export const getCars = async (search = "") => {
  const admin = await getAdmin();
  if (!admin.authorized) {
    throw new Error("Cannot perform request. You're unauthorized");
  }

  try {
    let where = {};

    if (search) {
      where.OR = [
        { make: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
        { color: { contains: search, mode: "insensitive" } },
      ];
    }

    const cars = await db.car.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    const serializedCars = cars.map(serializeCarData);

    return {
      success: true,
      data: serializedCars,
    };
  } catch (error) {
    console.error("Error getting cars: " + error.message);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const deleteCar = async (id) => {
  const admin = await getAdmin();
  if (!admin.authorized) {
    throw new Error("Cannot perform request. You're unauthorized");
  }

  try {
    const car = await db.car.findUnique({
      where: { id },
      select: { images: true },
    });

    if (!car) {
      return {
        success: false,
        error: "Car not found",
      };
    }

    try {
      const cookieStore = await cookies();
      const supabase = createClient(cookieStore);

      const filePaths = car.images
        .map((imageUrl) => {
          const url = new URL(imageUrl);
          const pathMatch = url.pathname.match(/\/car-images\/(.*)/);
          return pathMatch ? pathMatch[1] : null;
        })
        .filter(Boolean);

      // Delete files from storage if paths were extracted
      if (filePaths.length > 0) {
        const { error } = await supabase.storage
          .from("car-images")
          .remove(filePaths);

        if (error) {
          console.error("Error deleting images:", error);
          // We continue even if image deletion fails
        }
      }
    } catch (storageError) {
      console.error("Error with storage operations:", storageError);
      // Continue with the function even if storage operations fail
    }

    // Revalidate the cars list page
    revalidatePath("/admin/cars");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error deleting car:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Update car status or featured status
export const updateCarStatus = async (id, { status, featured }) => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const updateData = {};

    if (status !== undefined) {
      updateData.status = status;
    }

    if (featured !== undefined) {
      updateData.featured = featured;
    }

    // Update the car
    await db.car.update({
      where: { id },
      data: updateData,
    });

    // Revalidate the cars list page
    revalidatePath("/admin/cars");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error updating car status:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
