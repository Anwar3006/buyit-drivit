import { getCarById } from "@/actions/car-listing";
import { notFound } from "next/navigation";
import React from "react";
import CarDetails from "./_components/car-details";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const result = await getCarById(id);

  if (!result.success || result.error) {
    return {
      title: "Car Not Found | BuyIt_DrivIt",
      description: "The requested car could not be found",
    };
  }

  const car = result?.data;

  return {
    title: `${car?.year} ${car?.make} ${car?.model} | BuyIt_DrivIt`,
    description: car.description.substring(0, 160),
    openGraph: {
      images: car?.images?.[0] ? [car?.images[0]] : [],
    },
  };
}

const CarPage = async ({ params }) => {
  const { id } = await params;
  const result = await getCarById(id);

  if (!result.success) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <CarDetails
        car={result?.data}
        testDriveInfo={result?.data.testDriveInfo}
      />
    </div>
  );
};

export default CarPage;
