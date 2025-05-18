"use client";
import { useState, useEffect } from "react";
import { Car, ArrowLeft, MapPin, Search } from "lucide-react";

const NotFoundPage = () => {
  const [carPosition, setCarPosition] = useState({
    x: -100,
    direction: "right",
  });

  useEffect(() => {
    const animateCar = () => {
      setCarPosition((prev) => {
        if (prev.x > window.innerWidth + 100) {
          return { x: -100, direction: "right" };
        } else {
          return { x: prev.x + 5, direction: "right" };
        }
      });
    };

    const interval = setInterval(animateCar, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-b from-gray-50 to-gray-100 p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1634673970798-a15ae56f6c65?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-3xl text-center">
        {/* Animated car */}
        <div className="relative h-20 mb-12 overflow-hidden">
          <div
            className="absolute transition-all duration-300 text-blue-600"
            style={{
              transform: `translateX(${carPosition.x}px) scaleX(${
                carPosition.direction === "right" ? 1 : -1
              })`,
            }}
          >
            <Car size={48} strokeWidth={1.5} className="stroke-white" />
          </div>

          <div className="absolute bottom-0 w-full border-b-2 border-gray-300 border-dashed" />
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-8">
            Looks like you've taken a wrong turn on your journey. The page
            you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>Lost on the road</span>
            </div>
            <div className="hidden md:block h-6 border-r border-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <Search size={20} />
              <span>Page not in our garage</span>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="/"
              className="flex items-center gap-2 bg-rainbow-shift hover:bg-zinc-800! text-white py-3 px-6 rounded-full transition-all! duration-200! font-medium"
            >
              <ArrowLeft size={18} />
              Back to Home
            </a>
          </div>
        </div>

        {/* Additional help */}
        <div className="mt-8 text-gray-200">
          <p className="mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/inventory"
              className="text-white hover:text-gray-300 underline"
            >
              Browse Inventory
            </a>
            <a
              href="/contact"
              className="text-white hover:text-gray-300 underline"
            >
              Contact Support
            </a>
            <a
              href="/search"
              className="text-white hover:text-gray-300 underline"
            >
              Search Cars
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
