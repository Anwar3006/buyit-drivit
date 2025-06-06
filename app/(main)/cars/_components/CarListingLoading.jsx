import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CarListingLoading = () => {
  return (
    <div>
      <Skeleton className="h-8 mb-5 w-40" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="rounded-lg border overflow-hidden">
              <Skeleton className="h-48 w-full bg-zinc-400" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-5 w-2/3 bg-zinc-400" />
                <Skeleton className="h-4 w-1/2 bg-zinc-400" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-4/5 bg-zinc-400" />
                  <Skeleton className="h-4 w-3/5 bg-zinc-400" />
                </div>
                <div className="pt-2 flex gap-2">
                  <Skeleton className="h-9 flex-1 bg-zinc-400" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarListingLoading;
