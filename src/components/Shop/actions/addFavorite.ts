"use server";

import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";

import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export async function addFavorite(itemId: string) {
  const session = await getServerSession(authOptions);

  if (!session?.user) return;

  const existingUser = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!existingUser) {
    throw new Error("Can't find data!");
  }

  let updatedFavorites;
  if (existingUser.favoriteItems.includes(itemId)) {
    updatedFavorites = existingUser.favoriteItems.filter(i => i !== itemId);
  } else {
    updatedFavorites = [...existingUser.favoriteItems, itemId];
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { favoriteItems: updatedFavorites },
  });

  revalidateTag("favoriteItems");
}
