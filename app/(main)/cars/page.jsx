import { getCarFilters } from "@/actions/car-listing";
import React from "react";
import CarFilters from "./_components/CarFilters";
import CarListing from "./_components/CarListing";

export const metadata = {
  title: "Cars | BitDit Admin",
  description: "Browse and search for your next companion",
};

const CarsListPage = async () => {
  const filters = await getCarFilters();

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-5xl md:text-6xl mb-4 gradient-title">Browse Cars</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-80 flex-shrink-0">
          {/* {Filters} */}
          <CarFilters filters={filters.data} />
        </div>
        <div className="flex-1">
          {/* Listings */}
          <CarListing />
        </div>
      </div>
    </div>
  );
};

export default CarsListPage;
