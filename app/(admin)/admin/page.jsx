import { getDashboardData } from "@/actions/admin";
import React from "react";
import Dashboard from "./_components/Dashboard";

export const metadata = {
  title: "Dashboard | BitDit Admin",
  description: "Admin dashboard for BitDit",
};

const AdminPage = async () => {
  const dashboardData = await getDashboardData();

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6 font-bold ">Dashboard</h1>

      <Dashboard initialData={dashboardData} />
    </div>
  );
};

export default AdminPage;
