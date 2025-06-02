"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import {
  CameraIcon,
  FileXIcon,
  ImageIcon,
  Loader2,
  Loader2Icon,
  PlusIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import useFetch from "@/hooks/use-fetch";
import { addNewCar, processCarImageWithAI } from "@/actions/cars";
import { useRouter } from "next/navigation";

// Predefined options
const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"];
const transmissions = ["Automatic", "Manual", "Semi-Automatic"];
const bodyTypes = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Convertible",
  "Coupe",
  "Wagon",
  "Pickup",
];
const carStatuses = ["AVAILABLE", "UNAVAILABLE", "SOLD"];

// Define form schema with Zod
const carFormSchema = z.object({
  make: z.string().min(1, "Make is required"),
  model: z.string().min(1, "Model is required"),
  year: z.string().refine((val) => {
    const year = parseInt(val);
    return !isNaN(year) && year >= 1900 && year <= new Date().getFullYear() + 1;
  }, "Valid year required"),
  price: z.string().min(1, "Price is required"),
  mileage: z.string().min(1, "Mileage is required"),
  color: z.string().min(1, "Color is required"),
  fuelType: z.string().min(1, "Fuel type is required"),
  transmission: z.string().min(1, "Transmission is required"),
  bodyType: z.string().min(1, "Body type is required"),
  seats: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  status: z.enum(["AVAILABLE", "UNAVAILABLE", "SOLD"]),
  featured: z.boolean().default(false),
  // Images are handled separately
});

const AddCarForm = () => {
  const [activeTab, setActiveTab] = useState("ai");
  // Manual states
  const [gallery, setGallery] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  // AI states
  const [aiImagePreview, setAIImagePreview] = useState("");
  const [uploadedAiImage, setUploadedAiImage] = useState(null);

  const router = useRouter();

  // Zod form fields
  const {
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      make: "",
      model: "",
      year: "",
      price: "",
      mileage: "",
      color: "",
      fuelType: "",
      transmission: "",
      bodyType: "",
      seats: "",
      description: "",
      status: "",
      featured: false,
    },
  });

  // Custom hook for api calls
  const {
    data: addCarResult,
    isLoading: addCarLoading,
    fn: addCarFn,
  } = useFetch(addNewCar);

  const {
    isLoading: processImageLoading,
    fn: processImageFn,
    data: processImageResult,
    error: processImageError,
  } = useFetch(processCarImageWithAI);

  // Form Submitting Handler for both manual and ai(using Gemini AI to process the image)
  const submitFormHandler = async (data) => {
    if (gallery.length <= 0) {
      toast.error("Please upload atleast one image");
      return;
    }

    const carData = {
      ...data,
      year: parseInt(data.year),
      mileage: parseInt(data.mileage),
      price: parseFloat(data.price),
      seats: data.seats ? parseInt(data.year) : null,
    };

    await addCarFn({ carData, images: gallery });
  };
  const processWithAI = async () => {
    if (!uploadedAiImage) {
      toast.error("Please upload an image first");
      return;
    }

    await processImageFn(uploadedAiImage);
  };

  // UseEffect for when ai image upload is not successful
  useEffect(() => {
    if (processImageError) {
      toast.error(processImageError.message || "Failed to upload car");
      router.push("/admin/cars");
    }
  }, [processImageError]);
  // UseEffect for when ai image upload is successful
  useEffect(() => {
    if (processImageResult?.success) {
      const carDetails = processImageResult.data;

      console.log("@@:", carDetails);

      // Update form with AI results
      setValue("make", carDetails.make);
      setValue("model", carDetails.model);
      setValue("year", carDetails.year.toString());
      setValue("color", carDetails.color);
      setValue("bodyType", carDetails.bodyType);
      setValue("fuelType", carDetails.fuelType);
      setValue(
        "price",
        carDetails.price.includes("$")
          ? carDetails.price.slice(1).replace(",", "")
          : carDetails.price
      );
      setValue(
        "mileage",
        carDetails.mileage === "UNKNOWN" || carDetails.mileage === "Unknown"
          ? Math.floor(Math.random() * 1000).toString()
          : carDetails.mileage
      );
      setValue("transmission", carDetails.transmission);
      setValue("description", carDetails.description);

      const reader = new FileReader();
      reader.onloadend = () => {
        setGallery((prev) => [...prev, reader.result]);
        setImagePreview((prev) => [...prev, reader.result]);
        toast.success("Image read successfully");
      };
      reader.readAsDataURL(uploadedAiImage);

      toast.success("Successfully extracted car details", {
        description: `Detected ${carDetails.year} ${carDetails.make} ${
          carDetails.model
        } with ${Math.round(carDetails.confidence * 100)}% confidence`,
      });

      // Switch to manual tab for the user to review and fill in missing details
      setActiveTab("manual");
    }
  }, [processImageResult, uploadedAiImage, setValue]);

  // UseEffect for when form submitting is successful
  useEffect(() => {
    if (addCarResult?.success) {
      toast.success("Car successfully added");
      router.push("/admin/cars");
    }
  }, [addCarResult]);

  // React-drop-zone handlers for adding image and then custom logic to convert images to base64 and remove images logic
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    // Handle file rejections (oversized files, wrong format, etc.)
    if (fileRejections && fileRejections.length > 0) {
      fileRejections.forEach((rejection) => {
        if (rejection.errors.some((err) => err.code === "file-too-large")) {
          toast.error(
            `"${rejection.file.name}" is too large. Max size is 5MB.`
          );
        } else {
          toast.error(
            `"${rejection.file.name}" was rejected: ${rejection.errors[0].message}`
          );
        }
      });
    }

    if (acceptedFiles && acceptedFiles.length > 0) {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setGallery((prev) => [...prev, reader.result]);
          setImagePreview((prev) => [...prev, reader.result]);
          toast.success("Image read successfully");
        };

        reader.onerror = () => {
          toast.error("Error reading image");
        };

        reader.readAsDataURL(file);
      });
    }
  }, []);
  const { getRootProps, getInputProps, isDragReject, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
      },
      maxSize: MAX_FILE_SIZE,
    });
  const removeImage = (index) => {
    const updatedGallery = [...gallery];
    updatedGallery.splice(index, 1);
    setGallery(updatedGallery);

    const updatedPreviews = [...imagePreview];
    updatedPreviews.splice(index, 1);
    setImagePreview(updatedPreviews);

    toast.info(`Image removed`, {
      icon: <X className="h-6 w-6 text-red-600" />,
      position: "top-right",
    });
  };

  // AI Image Processing
  const onAiDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setUploadedAiImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setAIImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  }, []);
  const { getRootProps: getAiRootProps, getInputProps: getAiInputProps } =
    useDropzone({
      onDrop: onAiDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png", ".webp"],
      },
      maxFiles: 1,
      multiple: false,
    });

  return (
    <div>
      <Tabs
        defaultValue="ai"
        className="mt-6"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="manual" className="hover:cursor-pointer">
            Manual Entry
          </TabsTrigger>
          <TabsTrigger value="ai" className="hover:cursor-pointer">
            AI Upload
          </TabsTrigger>
        </TabsList>

        {/* Manual Input content */}
        <TabsContent value="manual" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Car Details</CardTitle>
              <CardDescription>
                Enter the details of the car you want to add
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(submitFormHandler)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Make */}
                  <div className="space-y-2">
                    <Label htmlFor="make">Make</Label>
                    <Input
                      id="make"
                      {...register("make")}
                      placeholder="e.g. Toyota"
                      className={errors.make ? "border-red-500" : ""}
                    />
                    {errors.make && (
                      <p className="text-xs text-red-500">
                        {errors.make.message}
                      </p>
                    )}
                  </div>

                  {/* Model */}
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      {...register("model")}
                      placeholder="e.g. Camry"
                      className={errors.model ? "border-red-500" : ""}
                    />
                    {errors.model && (
                      <p className="text-xs text-red-500">
                        {errors.model.message}
                      </p>
                    )}
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      {...register("year")}
                      placeholder="e.g. 2022"
                      className={errors.year ? "border-red-500" : ""}
                    />
                    {errors.year && (
                      <p className="text-xs text-red-500">
                        {errors.year.message}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      {...register("price")}
                      placeholder="e.g. 25000"
                      className={errors.price ? "border-red-500" : ""}
                    />
                    {errors.price && (
                      <p className="text-xs text-red-500">
                        {errors.price.message}
                      </p>
                    )}
                  </div>

                  {/* Mileage */}
                  <div className="space-y-2">
                    <Label htmlFor="mileage">Mileage</Label>
                    <Input
                      id="mileage"
                      {...register("mileage")}
                      placeholder="e.g. 15000"
                      className={errors.mileage ? "border-red-500" : ""}
                    />
                    {errors.mileage && (
                      <p className="text-xs text-red-500">
                        {errors.mileage.message}
                      </p>
                    )}
                  </div>

                  {/* Color */}
                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <Input
                      id="color"
                      {...register("color")}
                      placeholder="e.g. Blue"
                      className={errors.color ? "border-red-500" : ""}
                    />
                    {errors.color && (
                      <p className="text-xs text-red-500">
                        {errors.color.message}
                      </p>
                    )}
                  </div>

                  {/* Fuel Type */}
                  <div className="space-y-2">
                    <Label htmlFor="fuelType">Fuel Type</Label>
                    <Select
                      onValueChange={(value) => setValue("fuelType", value)}
                      defaultValue={getValues("fuelType")}
                    >
                      <SelectTrigger
                        className={errors.fuelType ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        {fuelTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.fuelType && (
                      <p className="text-xs text-red-500">
                        {errors.fuelType.message}
                      </p>
                    )}
                  </div>

                  {/* Transmission */}
                  <div className="space-y-2">
                    <Label htmlFor="transmission">Transmission</Label>
                    <Select
                      onValueChange={(value) => setValue("transmission", value)}
                      defaultValue={getValues("transmission")}
                    >
                      <SelectTrigger
                        className={errors.transmission ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        {transmissions.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.transmission && (
                      <p className="text-xs text-red-500">
                        {errors.transmission.message}
                      </p>
                    )}
                  </div>

                  {/* Body Type */}
                  <div className="space-y-2">
                    <Label htmlFor="bodyType">Body Type</Label>
                    <Select
                      onValueChange={(value) => setValue("bodyType", value)}
                      defaultValue={getValues("bodyType")}
                    >
                      <SelectTrigger
                        className={errors.bodyType ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Select body type" />
                      </SelectTrigger>
                      <SelectContent>
                        {bodyTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.bodyType && (
                      <p className="text-xs text-red-500">
                        {errors.bodyType.message}
                      </p>
                    )}
                  </div>

                  {/* Seats */}
                  <div className="space-y-2">
                    <Label htmlFor="seats">
                      Number of Seats{" "}
                      <span className="text-sm text-gray-500">(Optional)</span>
                    </Label>
                    <Input
                      id="seats"
                      {...register("seats")}
                      placeholder="e.g. 5"
                    />
                  </div>

                  {/* Status */}
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      onValueChange={(value) => setValue("status", value)}
                      defaultValue={getValues("status")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {carStatuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status.charAt(0) + status.slice(1).toLowerCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    placeholder="Enter detailed description of the car..."
                    className={`min-h-32 ${
                      errors.description ? "border-red-500" : ""
                    }`}
                  />
                  {errors.description && (
                    <p className="text-xs text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Featured */}
                <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                  <Checkbox
                    id="featured"
                    checked={watch("featured")}
                    onCheckedChange={(checked) => {
                      setValue("featured", checked);
                    }}
                  />
                  <div className="space-y-1 leading-none">
                    <Label htmlFor="featured">Feature this car</Label>
                    <p className="text-sm text-gray-500">
                      Featured cars appear on the homepage
                    </p>
                  </div>
                </div>

                {/* Image Upload with Dropzone */}
                <div className="space-y-3 w-full">
                  <div>
                    <h2 className="text-sm font-medium">Car Image</h2>
                    <p className="text-sm text-gray-500">
                      Upload image of the car.
                    </p>
                  </div>

                  {isDragReject && (
                    <span className="text-sm text-red-500">
                      Invalid Image Type
                    </span>
                  )}

                  {fileRejections && fileRejections.length > 0 && (
                    <div className="mt-2 text-sm text-red-500">
                      {fileRejections.map(({ file, errors }, index) => (
                        <p key={`rejection-${index}`}>
                          {file.name}: {errors[0].message}
                        </p>
                      ))}
                    </div>
                  )}

                  <div
                    className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <label
                      htmlFor="search-image"
                      className="inline-flex cursor-pointer flex-col items-center justify-center"
                    >
                      <ImageIcon className="h-12 w-12 text-gray-400" />

                      <span className="mt-2 text-sm font-medium text-gray-700">
                        Drag and drop images here, or click to select files
                      </span>

                      <span className="mt-1 text-xs text-gray-500">
                        JPG, PNG, GIF, WEBP up to 10MB
                      </span>
                    </label>
                  </div>

                  {/* Image Preview Grid */}
                  {imagePreview && imagePreview.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      {imagePreview.map((img, index) => (
                        <div
                          key={index}
                          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-2xl"
                        >
                          <img
                            src={img}
                            alt={`Car ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  //   onClick={handleSearch}
                  className="hover:cursor-pointer w-full mt-2"
                  disabled={addCarLoading}
                >
                  {addCarLoading ? (
                    <>
                      <Loader2Icon className="h-4 w-4 animate-spin" />
                      <span>Adding...</span>
                    </>
                  ) : (
                    <>
                      <PlusIcon className="h-4 w-4" />
                      <span>Add Car</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI content */}
        <TabsContent value="ai" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Car Details Extraction</CardTitle>
              <CardDescription>
                Upload an image of a car and let Gemini AI extract its details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  {aiImagePreview ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={aiImagePreview}
                        alt="Car preview"
                        className="max-h-56 max-w-full object-contain mb-4"
                      />
                      <div className="flex gap-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setAIImagePreview(null);
                            setUploadedAiImage(null);
                          }}
                          className="hover:cursor-pointer"
                        >
                          Remove
                        </Button>
                        <Button
                          onClick={processWithAI}
                          disabled={processImageLoading}
                          size="sm"
                          className="hover:cursor-pointer"
                        >
                          {processImageLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <CameraIcon className="mr-2 h-4 w-4" />
                              Extract Details
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div {...getAiRootProps()}>
                      <input {...getAiInputProps()} />
                      <label
                        htmlFor="search-image"
                        className="inline-flex cursor-pointer flex-col items-center justify-center"
                      >
                        <ImageIcon className="h-12 w-12 text-gray-400" />

                        <span className="mt-2 text-sm font-medium text-gray-700">
                          Drag and drop images here, or click to select files
                        </span>

                        <span className="mt-1 text-xs text-gray-500">
                          JPG, PNG, GIF, WEBP up to 10MB
                        </span>
                      </label>
                    </div>
                  )}
                </div>

                {processImageLoading && (
                  <div className="bg-blue-50 text-blue-700 p-4 rounded-md flex items-center">
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    <div>
                      <p className="font-medium">Analyzing image...</p>
                      <p className="text-sm">
                        Gemini AI is extracting car details
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">How it works</h3>
                  <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-4">
                    <li>Upload a clear image of the car</li>
                    <li>Click "Extract Details" to analyze with Gemini AI</li>
                    <li>Review the extracted information</li>
                    <li>Fill in any missing details manually</li>
                    <li>Add the car to your inventory</li>
                  </ol>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="font-medium text-amber-800 mb-1">
                    Tips for best results
                  </h3>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li>• Use clear, well-lit images</li>
                    <li>• Try to capture the entire vehicle</li>
                    <li>• For difficult models, use multiple views</li>
                    <li>• Always verify AI-extracted information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AddCarForm;
