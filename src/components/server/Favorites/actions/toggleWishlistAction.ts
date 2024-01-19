"use server";

import { revalidateTag } from "next/cache";

import { ItemService } from "@/services/ItemService";
import { SelectedItemsTag } from "@/components/server/Shop";

export async function toggleWishlistAction(id: string) {
  const existingItem = await ItemService.getSelectedItem(id);

  if (existingItem) {
    await ItemService.updateSelectedItem(id, {
      isInWishlist: !existingItem.isInWishlist,
    });
  } else {
    await ItemService.createSelected({
      itemId: id,
      isInWishlist: true,
    });
  }

  revalidateTag(SelectedItemsTag);
}
