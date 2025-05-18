// After user signs in with Clerk we want to store that user in our own DB

import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prismaClient";

export default async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (loggedInUser) return loggedInUser;

    const newUser = db.user.create({
      data: {
        clerkId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error.message);
  }
};
