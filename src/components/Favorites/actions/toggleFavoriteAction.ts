"use server";

import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";
import { SelectedItem } from "@prisma/client";
import { authOptions } from "@/lib/authOptions";
import { FavoriteTag } from "@/components/Shop/constants";

type ToggleFavoriteActionProps = {
  itemId: string;
  color?: string;
  size?: string;
  quantity?: number;
};

export async function toggleFavoriteAction({
  itemId,
  ...props
}: ToggleFavoriteActionProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user) return;

  const resp = await fetch(`http://localhost:3000/api/v1/shop/favorite`, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
    next: {
      tags: [FavoriteTag],
    },
  });

  if (!resp.ok) throw new Error("Something went wrong");

  const favoriteItems = (await resp.json()) as SelectedItem[];
  const existingFavoriteItem = favoriteItems.find(fav => fav.itemId === itemId);

  if (existingFavoriteItem) {``
    await prisma.selectedItem.delete({
      where: { id: existingFavoriteItem.id },
    });
  } else {
    await prisma.selectedItem.create({
      data: {
        isInWishlist: true,
        item: {
          connect: { id: itemId },
        },
        user: {
          connect: { id: session.user.id },
        },
      },
    });
  }
  revalidateTag("favoriteItems");
}
