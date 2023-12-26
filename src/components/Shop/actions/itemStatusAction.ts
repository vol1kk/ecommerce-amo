"use server";

import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";

import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";
import { getSelectedItems } from "@/components/Shop";
import { SelectedItems } from "@/components/Shop/constants";

type ItemStatusActionProps = {
  type: "cart" | "wishlist";
  itemId: string;
  color?: string;
  size?: string;
  quantity?: number;
};

export async function itemStatusAction({
  type,
  itemId,
  ...props
}: ItemStatusActionProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return;

  const selectedItems = await getSelectedItems();

  const existingFavoriteItem = selectedItems.find(fav => fav.itemId === itemId);
  const action = type === "wishlist" ? "isInWishlist" : "isInCart";

  if (existingFavoriteItem) {
    // Toggling isInWishlist / isInCart depending on specified type
    existingFavoriteItem[action] = !existingFavoriteItem[action];

    const { id, isInCart, isInWishlist } = existingFavoriteItem;

    // If after toggling both values are false, then delete this items
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
  }

  if (!existingFavoriteItem) {
    await prisma.selectedItem.create({
      data: {
        ...props,
        [action]: true,
        item: {
          connect: { id: itemId },
        },
        user: {
          connect: { id: session.user.id },
        },
      },
    });
  }

  revalidateTag(SelectedItems);
}
