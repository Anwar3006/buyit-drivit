import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CarFront, HeartIcon, Layout } from "lucide-react";
import { Button } from "./ui/button";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={isAdminPage ? "/admin" : "/"} className="flex">
          <Image
            src={"/logo.png"}
            alt="App Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
          {isAdmin && <span className="text-xs font-extralight">admin</span>}
        </Link>

        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href={"/"}>
              <Button className="flex items-center gap-2">
                <ArrowLeft size={18} />
                <span className="hidden md:inline">Back To App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href={"/saved-cars"}>
                <Button>
                  <HeartIcon size={18} fill="white" />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </Link>

              {!isAdmin ? (
                <Link href={"/reservations"}>
                  <Button variant={"outline"}>
                    <CarFront size={20} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              ) : (
                <Link href={"/admin"}>
                  <Button variant={"outline"}>
                    <Layout size={20} />
                    <span className="hidden md:inline">Admin Panel</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
