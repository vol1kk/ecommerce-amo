"use server";

import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";

import prisma from "@/lib/prisma";
import { SelectedItem } from "@/types";
import { authOptions } from "@/lib/authOptions";
import { getSelectedItems, SelectedItemsTag } from "@/components/server/Shop";

type ItemStatusActionProps = {
  type: "cart" | "wishlist";
} & Omit<SelectedItem, "id">;

export async function itemStatusAction({
  type,
  itemId,
  ...props
}: ItemStatusActionProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return;

  const selectedItems = await getSelectedItems("all");

  // TODO: Change to Nest.js
  const existingFavoriteItem = selectedItems.find(fav => fav.itemId === itemId);
  const action = type === "wishlist" ? "isInWishlist" : "isInCart";

  if (existingFavoriteItem) {
    // Toggling isInWishlist / isInCart depending on specified type
    existingFavoriteItem[action] = !existingFavoriteItem[action];

    const { id, isInCart, isInWishlist } = existingFavoriteItem;

    // If after toggling both values are false, then delete this item
    if (!isInCart && !isInWishlist) {
      await prisma.selectedItem.delete({
        where: { id },
      });
    } else {
      // Change value of respective action to the result of toggling
      await prisma.selectedItem.update({
        where: { id },
        data: {
          [action]: existingFavoriteItem[action],
        },
      });
    }
  } else {
    await prisma.selectedItem.create({
      data: {
        ...props,
        [action]: true,
        item: {
          connect: { id: itemId },
        },
        user: {
          connect: { id: session.user.id }, // Todo?: user.sub for oauth, user.id for credentials
        },
      },
    });
  }

  revalidateTag(SelectedItemsTag);
}
