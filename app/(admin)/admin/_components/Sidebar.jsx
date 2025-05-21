"use client";
import { cn } from "@/lib/utils";
import {
  CalendarClock,
  CarFrontIcon,
  Cog,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sideNav = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
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
  const pathname = usePathname();
  return (
    <>
      <div className="hidden md:flex flex-col h-full overflow-y-auto bg-white shadow-sm pt-5">
        {sideNav.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={cn(
              `flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all 
              hover:text-slate-600 hover:bg-slate-100/50 h-10`,
              pathname === nav.href &&
                "text-blue-700 bg-blue-100/50 hover:bg-blue-100 hover:text-blue-700"
            )}
          >
            <nav.icon className="h-5 w-5" />
            {nav.label}
          </Link>
        ))}
      </div>

      {/* Mobile screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t flex justify-around items-center h-16">
        {sideNav.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={cn(
              `flex flex-col items-center justify-center text-slate-500
              text-xs font-medium transition-all py-1 flex-1`,
              pathname === nav.href && "text-blue-700"
            )}
          >
            <nav.icon className="h-5 w-5" />
            {nav.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
