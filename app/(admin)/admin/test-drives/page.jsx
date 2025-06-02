import React from "react";
import TestDriveList from "./_components/test-drive-list";

export const metadata = {
  title: "Test Drives | BitDit Admin",
  description: "Manage test drive bookings",
};
const TestDrivesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6 font-bold">Test Drive Management</h1>
      <TestDriveList />
    </div>
  );
};

export default TestDrivesPage;
