import { getUserTestDrives } from "@/actions/test-drive";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import ReservationsList from "./_components/reservations-list";

export const metadata = {
  title: "My Reservations | BuyIt_Drivit",
  description: "Manage your test drive reservations",
};

const ReservationsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect=/reservations");
  }

  const reservationsResult = await getUserTestDrives();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl md:text-6xl mb-6 gradient-title">
        My Reservations
      </h1>

      <ReservationsList initialData={reservationsResult} />
    </div>
  );
};

export default ReservationsPage;
