import { getAllSavedCarsForUser } from "@/actions/car-listing";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import SavedCarsList from "./_components/saved-cars-list";

const SavedCarsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in?redirect=/saved-cars");
  }

  const savedCars = await getAllSavedCarsForUser();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl md:text-6xl mb-4 gradient-title">
        Your Wishlist
      </h1>

      <div>
        <SavedCarsList initialData={savedCars} />
      </div>
    </div>
  );
};

export default SavedCarsPage;
