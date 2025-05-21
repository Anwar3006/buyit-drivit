"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CarFront,
  HeartIcon,
  Layout,
  LogOut,
  MenuIcon,
  User,
  LogIn,
  UserPlus2Icon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = ({ userData, isAdmin, isAdminPage = false }) => {
  const user = userData;

  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Ref to store the initial position of navbar
  const navbarRef = useRef(null);
  const [navbarPosition, setNavbarPosition] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  // Effect to calculate and store navbar position on mount
  useEffect(() => {
    if (typeof window !== "undefined" && navbarRef.current) {
      const rect = navbarRef.current.getBoundingClientRect();
      const position = rect.top + window.scrollY;
      setNavbarPosition(position);
      setInitialRender(false);
    }
  }, []);

  // Effect to handle scroll events
  useEffect(() => {
    if (typeof window !== "undefined" && !initialRender) {
      const handleScroll = () => {
        // Check if page is scrolled past the original navbar position
        if (window.scrollY > navbarPosition) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Call once to set initial state
      handleScroll();

      // Clean up event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [navbarPosition, initialRender]);

  // Create a placeholder div that takes up space when navbar becomes fixed
  // to prevent content from jumping
  const navbarHeight =
    isScrolled && navbarRef.current
      ? `${navbarRef.current.offsetHeight}px`
      : "0px";

  return (
    <>
      {isScrolled && <div style={{ height: navbarHeight }} />}
      <nav
        ref={navbarRef}
        className={`transition-all duration-500 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 w-full z-90 shadow-xl"
            : "relative rounded-xl"
        } bg-white px-3`}
      >
        <div
          className={`${
            isScrolled ? "px-4 py-2 max-w-7xl mx-auto" : "py-2"
          } flex items-center justify-between w-full`}
        >
          {/* Logo */}
          <Link
            href={isAdminPage ? "/admin" : "/"}
            className="flex items-center"
          >
            <Image
              src={"/logo.png"}
              alt="App Logo"
              width={200}
              height={60}
              className="h-6 md:h-12 w-auto object-contain"
            />
            {isAdminPage && (
              <span className="text-xs font-bold ml-2 bg-black text-white px-2 py-1 rounded">
                ADMIN
              </span>
            )}
          </Link>

          {/* Navigation Links - for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/cars"
              className="text-gray-600 hover:text-black font-medium"
            >
              Browse Cars
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-black font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-black font-medium"
            >
              About Us
            </Link>
          </div>

          {/* Menu Button & User Actions */}
          <div className="flex items-center space-x-4">
            {isAdminPage ? (
              <Link href={"/"}>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-3 w-3 md:h-5 md:w-5" />
                  <span className="text-xs md:text-base">Back To App</span>
                </Button>
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="flex items-center gap-2 rounded-3xl hover:cursor-pointer"
                  >
                    <MenuIcon size={20} />
                    <span className="hidden md:inline">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 mr-4 mt-2">
                  <SignedIn>
                    <div className="flex items-center gap-4 p-3 border-b">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        {user?.imageUrl ? (
                          <Image
                            src={user.imageUrl}
                            alt="User profile"
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-gray-200">
                            <User size={24} className="text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {user?.fullName || "User"}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {user?.primaryEmailAddress?.emailAddress}
                        </p>
                      </div>
                    </div>
                  </SignedIn>

                  <DropdownMenuLabel className="text-gray-500">
                    <SignedIn>My Account</SignedIn>
                    <SignedOut>Menu</SignedOut>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  {/* Navigation items for mobile */}
                  <div className="md:hidden px-1 py-1">
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link
                        href="/cars"
                        className="flex items-center p-2 rounded-md hover:bg-gray-100"
                      >
                        <CarFront size={18} className="mr-2" />
                        Browse Cars
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link
                        href="/pricing"
                        className="flex items-center p-2 rounded-md hover:bg-gray-100"
                      >
                        <span className="mr-2">$</span>
                        Pricing
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link
                        href="/about"
                        className="flex items-center p-2 rounded-md hover:bg-gray-100"
                      >
                        <span className="mr-2">ℹ️</span>
                        About Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </div>

                  <DropdownMenuGroup>
                    <SignedIn>
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href="/saved-cars"
                          className="flex items-center p-2 rounded-md hover:bg-gray-100"
                        >
                          <HeartIcon size={18} className="mr-2" />
                          Saved Cars
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href="/reservations"
                          className="flex items-center p-2 rounded-md hover:bg-gray-100"
                        >
                          <CarFront size={18} className="mr-2" />
                          My Reservations
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link
                          href="/profile"
                          className="flex items-center p-2 rounded-md hover:bg-gray-100"
                        >
                          <User size={18} className="mr-2" />
                          Profile Settings
                        </Link>
                      </DropdownMenuItem>

                      {isAdmin && (
                        <DropdownMenuItem asChild className="cursor-pointer">
                          <Link
                            href="/admin"
                            className="flex items-center p-2 rounded-md hover:bg-gray-100"
                          >
                            <Layout size={18} className="mr-2" />
                            Admin Panel
                          </Link>
                        </DropdownMenuItem>
                      )}

                      <DropdownMenuSeparator />

                      <DropdownMenuItem asChild className="cursor-pointer">
                        <SignOutButton className="w-full">
                          <button className="flex items-center p-2 rounded-md hover:bg-gray-100 text-red-500 w-full">
                            <LogOut size={18} className="mr-2" />
                            Sign Out
                          </button>
                        </SignOutButton>
                      </DropdownMenuItem>
                    </SignedIn>
                  </DropdownMenuGroup>

                  <SignedOut>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer w-full flex justify-center"
                    >
                      <SignInButton mode="modal">
                        <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-100">
                          <LogIn size={18} className="mr-2" />
                          Sign In
                        </button>
                      </SignInButton>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer w-full flex justify-center"
                    >
                      <SignUpButton mode="modal">
                        <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-100">
                          <UserPlus2Icon size={18} className="mr-2" />
                          Sign Up
                        </button>
                      </SignUpButton>
                    </DropdownMenuItem>
                  </SignedOut>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
