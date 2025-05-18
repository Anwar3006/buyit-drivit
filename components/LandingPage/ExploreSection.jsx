import { Quicksand } from "next/font/google";
import React from "react";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export default function ExploreSection() {
  return (
    <div className="absolute bottom-8 md:bottom-8 left-auto right-8 w-auto max-w-[40vw] md:max-w-[25vw] lg:max-w-[25vw] xl:max-w-[28vw]">
      <h2
        className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-extrabold leading-tight tracking-tight text-right ${quicksand.className}`}
      >
        EXPLORE YOUR PERFECT DREAM CAR'S.
      </h2>
    </div>
  );
}
