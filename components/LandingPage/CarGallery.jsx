// components/LandingPage/CarGallery.jsx
import React from "react";
import Image from "next/image";

export default function CarGallery() {
  // Sample car data
  const cars = [
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      label: "View Gallery",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      label: "View Gallery",
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      label: "View Gallery",
    },
  ];

  return (
    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex space-x-2 md:space-x-4 overflow-x-auto pb-2 max-w-full">
      {cars.map((car, index) => (
        <div
          key={car.id}
          className={`flex-shrink-0 bg-white rounded-lg overflow-hidden w-24 h-24 md:w-32 md:h-32 shadow-lg hover:shadow-xl transition-shadow ${
            index === 0 ? "block" : "hidden md:block"
          }`}
        >
          <div className="h-3/4 relative">
            <Image
              src={car.imageSrc}
              alt={`Car ${car.id}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="h-1/4 flex items-center justify-center text-xs font-medium">
            {car.label}
          </div>
        </div>
      ))}
    </div>
  );
}
