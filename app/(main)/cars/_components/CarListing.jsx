"use client";
import { getCars } from "@/actions/car-listing";
import useFetch from "@/hooks/use-fetch";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import CarListingLoading from "./CarListingLoading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  generatePaginationItems,
  usePaginationWithFilters,
  calculatePaginationInfo,
  PAGINATION_CONFIGS,
} from "@/lib/pagination";

const CarListing = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get current filter values from searchParams
  // Memoize filter values to prevent unnecessary re-renders
  const filters = useMemo(
    () => ({
      search: searchParams.get("search") || "",
      make: searchParams.get("make") || "",
      bodyType: searchParams.get("bodyType") || "",
      fuelType: searchParams.get("fuelType") || "",
      transmission: searchParams.get("transmission") || "",
      minPrice: searchParams.get("minPrice") || 0,
      maxPrice: searchParams.get("maxPrice") || Number.MAX_SAFE_INTEGER,
      sortBy: searchParams.get("sortBy") || "newest",
    }),
    [searchParams]
  );

  // Use the pagination hook with filter dependencies
  // Create stable filter dependencies array
  const filterDependencies = useMemo(
    () => [
      filters.search,
      filters.make,
      filters.bodyType,
      filters.fuelType,
      filters.transmission,
      filters.minPrice,
      filters.maxPrice,
      filters.sortBy,
    ],
    [filters]
  );

  const { getCurrentPage, safeUpdatePage, getPaginationMeta } =
    usePaginationWithFilters(filterDependencies);

  // Use responsive pagination config
  const paginationConfig = PAGINATION_CONFIGS.desktop;
  const limit = paginationConfig.itemsPerPage;
  const currentPage = getCurrentPage();

  const { isLoading, data: result, error, fn: fetchCars } = useFetch(getCars);

  //useEffect to run when any of the filters changes fetch cars when filters or page changes
  // Fetch cars when filters or page changes
  useEffect(() => {
    fetchCars({
      ...filters,
      page: currentPage,
      limit,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // Only include primitive values that actually change
    filters.search,
    filters.make,
    filters.bodyType,
    filters.fuelType,
    filters.transmission,
    filters.minPrice,
    filters.maxPrice,
    filters.sortBy,
    currentPage,
    limit,
  ]);

  if (isLoading && !result) {
    return <CarListingLoading />;
  }

  if (error || (!result && !result?.success)) {
    <Alert variant="destructive">
      <Info className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Failed to load cars. Please reload the page
      </AlertDescription>
    </Alert>;
  }

  if (!result && !result?.data) {
    return null;
  }

  const { data: cars, pagination } = result;

  ////////////////////////// Pagination logic /////////////

  // Get pagination metadata using the utility
  const paginationMeta = getPaginationMeta(pagination.pages);

  // Calculate pagination info for display
  const paginationInfo = calculatePaginationInfo(
    currentPage,
    limit,
    pagination.total
  );

  // Generate pagination items with smart ellipsis
  const paginationItems = generatePaginationItems(
    currentPage,
    pagination.pages,
    paginationConfig.maxVisible
  );

  // Handle page navigation with validation
  const handlePageChange = (page) => {
    safeUpdatePage(page, pagination.pages);
  };
  /////////////////////////////////////////////////////////

  // No results
  if (cars.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 border rounded-lg bg-gray-50">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
          <Info className="h-8 w-8 text-gray-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">No cars found</h3>
        <p className="text-gray-500 mb-6 max-w-md">
          We couldn't find any cars matching your search criteria. Try adjusting
          your filters or search term.
        </p>
        <Button variant="outline" asChild>
          <Link href="/cars">Clear all filters</Link>
        </Button>
      </div>
    );
  }
  return (
    <div>
      {/* Results count and current page */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing{" "}
          <span className="font-medium">
            {paginationInfo.startItem}-{paginationInfo.endItem}
          </span>{" "}
          of <span className="font-medium">{paginationInfo.totalItems}</span>{" "}
          cars
        </p>

        {/* Page info for larger datasets */}
        {paginationInfo.isMultiPage && (
          <p className="text-sm text-gray-500">
            Page {paginationMeta.currentPage} of {paginationMeta.totalPages}
          </p>
        )}
      </div>

      {/* Car grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* Enhanced Pagination */}
      {paginationInfo.isMultiPage && (
        <Pagination className="mt-8">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className={
                  !paginationMeta.hasPrevious
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
                aria-disabled={!paginationMeta.hasPrevious}
              />
            </PaginationItem>

            {/* Dynamic Page Numbers */}
            {paginationItems.map((item, index) => (
              <PaginationItem key={`${item}-${index}`}>
                {typeof item === "string" && item.startsWith("ellipsis") ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(item);
                    }}
                    isActive={item === currentPage}
                    className="cursor-pointer"
                    aria-label={`Go to page ${item}`}
                    aria-current={item === currentPage ? "page" : undefined}
                  >
                    {item}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className={
                  !paginationMeta.hasNext
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
                aria-disabled={!paginationMeta.hasNext}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Quick jump for large datasets (optional) */}
      {paginationMeta.totalPages > 10 && (
        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Quick jump:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(1)}
              disabled={paginationMeta.isFirstPage}
            >
              First
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(paginationMeta.totalPages)}
              disabled={paginationMeta.isLastPage}
            >
              Last
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarListing;
