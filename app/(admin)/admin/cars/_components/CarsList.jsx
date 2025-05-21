"use client";
import { deleteCar, getCars, updateCarStatus } from "@/actions/cars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/use-fetch";
import { formatCurrency } from "@/lib/helpers";
import { CarIcon, Loader2, PlusIcon, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CarsList = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    isLoading: loadingCars,
    data: carsData,
    error: carsError,
    fn: fetchCars,
  } = useFetch(getCars);

  const {
    isLoading: deletingCar,
    data: deleteResult,
    error: deleteError,
    fn: deleteCarFn,
  } = useFetch(deleteCar);

  const {
    isLoading: updatingCar,
    data: updateResult,
    error: updateError,
    fn: updatingCarFn,
  } = useFetch(updateCarStatus);

  useEffect(() => {
    fetchCars(searchTerm);
  }, [searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  // Get status badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "AVAILABLE":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Available
          </Badge>
        );
      case "UNAVAILABLE":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Unavailable
          </Badge>
        );
      case "SOLD":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Sold
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:text-center justify-between">
        <Button
          onClick={() => router.push("/admin/cars/create")}
          className="hover:cursor-pointer flex items-center"
        >
          <PlusIcon className="h-4 w-4" /> Add Car
        </Button>

        <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search cars..."
              className="pl-8 w-full sm:w-60"
            />
          </div>
        </form>
      </div>

      {/* Cars Table */}
      <Card>
        <CardContent className="p-0">
          {loadingCars && !carsData ? (
            <div className="flex items-center justify-center flex-col">
              <Loader2 className="h-10 w-10 animate-spin stroke-zinc-900" />
              <span className="text-gray-500">
                Loading your table. Please wait...
              </span>
            </div>
          ) : carsData?.success && carsData?.data.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Make & Model</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {carsData?.data.map((car) => (
                    <TableRow key={car.id}>
                      <TableCell className="w-10 h-10 overflow-hidden rounded-md">
                        {car.images && car.images.length > 0 ? (
                          <Image
                            src={car.images[0]}
                            alt={`${car.make} ${car.model}`}
                            height={40}
                            width={40}
                            className="h-full w-full object-cover"
                            priority
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                            <CarIcon className="h-6 w-6 stroke-gray-400" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        {car.make} {car.model}
                      </TableCell>

                      <TableCell>{car.year}</TableCell>
                      <TableCell>{formatCurrency(car.price)}</TableCell>
                      <TableCell>{getStatusBadge(car.status)}</TableCell>
                      <TableCell>{car.featured ? "Yes" : "No"}</TableCell>
                      <TableCell className="text-right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div></div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CarsList;
