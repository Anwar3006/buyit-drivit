"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { CarIcon, HeartIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { toggleSavedCars } from "@/actions/car-listing";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

const CarCard = ({ car }) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(car.wishlisted);
  const { isSignedIn } = useAuth();

  const colorMap = {
    red: "bg-red-200",
    blue: "bg-blue-200",
    green: "bg-green-200",
    // add all possible colors
    gray: "bg-gray-200",
    black: "bg-gray-800 text-white",
    white: "bg-gray-100",
    silver: "bg-gray-300",
    yellow: "bg-yellow-200",
    orange: "bg-orange-200",
    purple: "bg-purple-200",
    brown: "bg-amber-200",
  };

  const {
    isLoading: isToggling,
    data: toggleResult,
    error: toggleError,
    fn: toggleSavedFn,
  } = useFetch(toggleSavedCars);

  useEffect(() => {
    if (toggleResult?.success && toggleResult.saved !== isLiked) {
      setIsLiked(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [isLiked, toggleResult]);

  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  const handleHeartClick = async (e) => {
    e.stopPropagation();

    if (!isSignedIn) {
      toast.error("Please sign in to save a car");
      router.push("/sign-in");
      return;
    }

    if (isToggling) return;

    await toggleSavedFn(car.id);
  };

  const handleCardClick = () => {
    router.push(`/cars/${car.id}`);
  };

  return (
    <Card
      className="hover:shadow-lg group transition hover:cursor-pointer overflow-hidden py-0 gap-3"
      onClick={handleCardClick}
    >
      <div className="relative h-48">
        {car.images && car.images.length > 0 ? (
          <div className="relative w-full h-full ">
            <Image
              src={car.images[0]}
              alt={`${car.make} - ${car.model}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <CarIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}

        <button
          onClick={handleHeartClick}
          className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md transition-colors duration-300 hover:bg-white"
          aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          type="button"
        >
          <HeartIcon
            className="h-6 w-6 transition-all duration-300 hover:scale-110"
            fill={isLiked ? "red" : "none"}
            stroke={isLiked ? "red" : "gray"}
          />
        </button>
      </div>

      <CardContent className="px-4 pb-4">
        <div className="flex flex-col mb-2">
          <h3 className="text-lg font-bold line-clamp-1">
            <span className="font-bold">{car.make} </span>
            <span className="italic font-light text-sm">{car.model}</span>
          </h3>
          <span className="text-xl font-bold text-emerald-600">
            ${car.price.toLocaleString()}
          </span>
        </div>

        <div className="text-gray-600 mb-3 flex items-center text-sm md:text-base">
          <span>{car.year}</span>
          <span className="mx-2">•</span>
          <span>{car.transmission}</span>
          <span className="mx-2">•</span>
          <span>{car.fuelType}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="outline" className="bg-gray-50">
            {car.bodyType}
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {car.mileage.toLocaleString()} miles
          </Badge>
          <Badge
            variant="outline"
            className={
              car.color
                ? colorMap[car.color.toLowerCase()] || "bg-gray-50"
                : "bg-gray-50"
            }
          >
            {car.color}
          </Badge>
        </div>

        <Button
          className="w-full bg-rainbow-shift text-white font-medium transition-colors duration-300 hover:bg-zinc-900 hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/cars/${car.id}`);
          }}
        >
          View Car
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
