import { getFeaturedCars } from "@/actions/home";
import CarCard from "@/components/CarCard";
import BackgroundImageRotator from "@/components/LandingPage/BackgroundImageRotator";
import CarFeatures from "@/components/LandingPage/CarFeatures";
import CarGallery from "@/components/LandingPage/CarGallery";
import ExploreSection from "@/components/LandingPage/ExploreSection";
import Hero from "@/components/LandingPage/Hero";
import NavbarWrapper from "@/components/NavbarWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";
import { SignedOut } from "@clerk/nextjs";
import { Calendar, Car, ChevronRight, ShieldCheckIcon } from "lucide-react";
import { Quicksand } from "next/font/google";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export default async function Home() {
  const featuredCars = await getFeaturedCars();

  return (
    <>
      <Head>
        <title>Clāšto - Find Your Dream Car</title>
        <meta
          name="description"
          content="Find the perfect car of your dreams with Clāšto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-h-screen relative overflow-hidden">
        {/* Background image container */}
        <BackgroundImageRotator />

        {/* Content container */}
        <div className="relative z-10 h-screen flex flex-col">
          {/* Navbar at the top */}
          <div className="w-full px-4 pt-4 md:px-8 lg:px-12">
            <NavbarWrapper />
          </div>

          {/* Main content area */}
          <div className="flex-1 relative px-4 md:px-8 lg:px-12 pb-4">
            <Hero />
            <CarFeatures />
            <CarGallery />
            <ExploreSection />
          </div>
        </div>
      </section>

      {featuredCars.length > 0 && (
        <section className="py-12 ">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className={`text-2xl font-bold ${quicksand.className}`}>
                Featured Cars
              </h2>
              <Button variant="ghost" className="flex items-center" asChild>
                <Link href={"/cars"}>
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Separator className="container mx-auto" />

      <section className="py-12 overflow-scroll bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className={`text-2xl font-bold ${quicksand.className}`}>
              Browse by Make
            </h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href={"/cars"}>
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {carMakes.map((make) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="h-16 w-auto mx-auto relative mb-2">
                  <Image
                    src={make.image}
                    alt={make.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`font-medium text-gray-600 ${quicksand.className}`}
                >
                  {make.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2
            className={`text-center font-bold text-2xl mb-12 ${quicksand.className}`}
          >
            Why Choose Our Platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center px-3 md:px-1">
            <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 aspect-square flex items-center justify-center mx-auto mb-4">
              <Car className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
            <p className="text-gray-500">
              Thousands of verified vehicles from trusted dealerships and
              private sellers.
            </p>
          </div>

          <div className="text-center px-3 md:px-1">
            <div className="bg-orange-100 text-orange-700 rounded-full w-16 h-16 aspect-square flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Test Drive</h3>
            <p className="text-gray-500">
              Book a Test Drive online in a matter of minutes, with flexible
              scheduling options.
            </p>
          </div>

          <div className="text-center px-3 md:px-1">
            <div className="bg-emerald-100 text-emerald-700 rounded-full w-16 h-16 aspect-square flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Process</h3>
            <p className="text-gray-500">
              Verified listings and secure booking process for peace of mind
            </p>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section className="py-12 overflow-scroll bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className={`text-2xl font-bold ${quicksand.className}`}>
              Browse by Model Type
            </h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href={"/cars"}>
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {bodyTypes.map((type) => (
              <Link
                key={type.name}
                href={`/cars?bodyType=${type.name}`}
                className="relative group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <h3 className={`font-bold text-white pl-4 pb-2`}>
                    {type.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl underline font-bold text-center mb-8 ${quicksand.className}`}
          >
            FAQs
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="hover:cursor-pointer"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative py-16 text-white">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-[url('/car-bg.jpg')] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1634673970798-a15ae56f6c65?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-600/70 via-gray-600/70 to-zinc-400/70" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to find your Dream Car?
          </h2>
          <p className="text-blue-100 mb-8 text-xl max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect
            companion through our platform
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cars">View All Cars</Link>
            </Button>
            <SignedOut>
              <Button size="lg" asChild>
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>
    </>
  );
}
