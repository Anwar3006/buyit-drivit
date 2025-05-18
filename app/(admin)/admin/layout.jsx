import { getAdmin } from "@/actions/admin";
import NavbarWrapper from "@/components/NavbarWrapper";
import { notFound } from "next/navigation";
import React from "react";
import Sidebar from "./_components/Sidebar";

const AdminLayout = async ({ children }) => {
  const admin = await getAdmin();

  if (!admin.authorized) {
    return notFound();
  }

  return (
    <div>
      <div className="w-full px-4 pt-4 md:px-8">
        <NavbarWrapper isAdminPage={true} />
      </div>

      <div className="flex w-full h-full flex-col top-20 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="container mx-auto my-8 md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
