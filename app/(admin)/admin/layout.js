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
      <NavbarWrapper isAdminPage={true} />

      <div className="flex w-56 h-full flex-col top-16 fixed inset-y-0 z-20">
        <Sidebar />
      </div>
      <main className="mx-auto md:pl-56 h-full bg-gray-50!">{children}</main>
    </div>
  );
};

export default AdminLayout;
