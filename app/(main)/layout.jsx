import NavbarWrapper from "@/components/NavbarWrapper";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full px-4 pt-4 md:px-8">
        <NavbarWrapper />
      </div>
      <main className="container mx-auto my-8 px-4">{children}</main>
    </div>
  );
};

export default MainLayout;
