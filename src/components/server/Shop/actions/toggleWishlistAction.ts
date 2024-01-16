"use server";

import { revalidateTag } from "next/cache";

import { ItemService } from "@/services/ItemService";
import { SelectedItemsTag } from "@/components/server/Shop";

export default async function toggleWishlistAction(id: string) {
  const existingItem = await ItemService.getSelectedItem(id);

  if (existingItem) {
    // TODO: refactor (?), 'cuz no need to duplicate itemId and params/:id
    await ItemService.updateSelectedItem(id, {
      itemId: id,
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
