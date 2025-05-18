// components/LandingPage/CarFeatures.jsx
import React from "react";

export default function CarFeatures() {
  return (
    <div className="absolute hidden md:block right-4 md:right-8 lg:right-16 top-28 bg-white/15 border-[1px] border-white/70 backdrop-blur-sm text-white p-4 md:py-4 md:px-3 rounded-lg max-w-sm md:w-[16rem]">
      <h3 className="text-xl mb-4 font-medium">Features</h3>

      <div className="space-y-4">
        <div className="flex justify-between bg-black/50 backdrop-blur-lg py-1 px-3 rounded-md">
          <div>
            <div className="text-xs text-gray-400">Engine</div>
            <div className="font-semibold text-sm">2925 cc</div>
          </div>
          <div className="text-right">
            <div className="invisible text-xs">-</div>
            <div className="font-semibold text-sm">3982 cc</div>
          </div>
        </div>

        <div className="flex justify-between bg-black/50 backdrop-blur-lg py-1 px-3 rounded-md">
          <div>
            <div className="text-xs text-gray-400">Power</div>
            <div className="font-semibold text-sm">325.86</div>
          </div>
          <div className="text-right">
            <div className="invisible text-xs">-</div>
            <div className="font-semibold text-sm">576.63 bhp</div>
          </div>
        </div>

        <div className="flex justify-between bg-black/50 backdrop-blur-lg py-1 px-3 rounded-md">
          <div>
            <div className="text-xs text-gray-400">Seating Capacity</div>
            <div className="font-semibold text-sm">5</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">Drive Type</div>
            <div className="font-semibold text-sm">AWD</div>
          </div>
        </div>
      </div>
    </div>
  );
}
