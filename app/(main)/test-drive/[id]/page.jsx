import { getCarById } from "@/actions/car-listing";
import { notFound } from "next/navigation";
import React from "react";
import TestDriveForm from "./_components/test-drive-from";

export async function generateMetadata() {
  return {
    title: "Book Test Drive | BuyIt_DrivIt",
    description: "Schedule a Test drive in just a few clicks",
  };
}

const TestDrivePage = async ({ params }) => {
  const { id } = await params;
  const result = await getCarById(id);

  if (!result.success) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl md:text-6xl mb-6 gradient-title">
        Book A Test drive
      </h1>

      <TestDriveForm
        car={result?.data}
        testDriveInfo={result?.data?.testDriveInfo}
      />
    </div>
  );
};

export default TestDrivePage;
