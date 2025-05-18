"use server";

import { db } from "@/lib/prismaClient";
import { auth } from "@clerk/nextjs/server";

export const getAdmin = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthenticated");

  const user = await db.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user || user?.role !== "ADMIN") {
    return { authorized: false, reason: "not-admin" };
  }

  return { authorized: true, user };
};
