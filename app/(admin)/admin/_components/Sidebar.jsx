"use client";
import {
  CalendarClock,
  CarFrontIcon,
  Cog,
  LayoutDashboard,
} from "lucide-react";
import React from "react";

const sideNav = [
  {
    label: "Dahsboard",
    icon: LayoutDashboard,
    href: "admin/dashboard",
  },
  {
    label: "Cars",
    icon: CarFrontIcon,
    href: "/admin/cars",
  },
  {
    label: "Test Drives",
    icon: CalendarClock,
    href: "/admin/test-drives",
  },
  {
    label: "Settings",
    icon: Cog,
    href: "/admin/settings",
  },
];
const Sidebar = () => {
  return <div>Sidebar</div>;
};

export default Sidebar;
