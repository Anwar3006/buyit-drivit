// components/LandingPage/Hero.jsx
import React, { useState } from "react";
import { ArrowRight, PersonStanding } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Roboto } from "next/font/google";
import HomeSearchModal from "./HomeSearchModal";

// Initialize Roboto font
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  const [isHomeSearchModalOpen, setIsHomeSearchModalOpen] = useState(false);

  return (
    <div
      className={`relative h-full flex flex-col justify-center px-8 lg:px-16 ${roboto.className} -top-40 right-6 lg:right-20`}
    >
      <div className="z-10">
        {/* Hero text container */}
        <div className="flex items-center">
          {/* "Find" text */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider"
            style={{ lineHeight: "1.5", transform: "scaleY(1.5)" }}
          >
            Find
          </h1>

          {/* The Perfect Car Of Your Dreams text */}
          <div className="ml-2 mb-2 leading-none">
            <h2 className="text-xl md:text-4xl lg:text-5xl font-medium text-white m-0">
              The Perfect
            </h2>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-medium text-white m-0 -mt-1">
              Car Of Your
            </h2>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-medium text-white m-0 -mt-1">
              Dreams
            </h2>
          </div>
        </div>

        {isHomeSearchModalOpen && (
          <HomeSearchModal
            open={isHomeSearchModalOpen}
            onClose={setIsHomeSearchModalOpen}
          />
        )}
        {/* CTA Button */}
        <div className="mt-8 md:mt-12">
          <button
            onClick={() => setIsHomeSearchModalOpen(!isHomeSearchModalOpen)}
            className="group relative flex items-center justify-center bg-white text-black hover:bg-gray-700 px-4 py-3 rounded-lg text-base md:text-lg transition-all hover:cursor-pointer"
          >
            {/* Text that fades out on hover */}
            <span className="text-xs md:text-base font-medium group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500">
              Choose your new car
            </span>

            <div
              className="bg-rainbow-shift group-hover:left-1/2 group-hover:top-1/2 
                 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bg-gray-900
                 rounded-full p-1 md:p-2 transition-all ease-in-out duration-300 absolute left-full top-0 
                 -translate-x-1/2 -translate-y-1/2"
            >
              <ArrowRight
                size={28}
                className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
