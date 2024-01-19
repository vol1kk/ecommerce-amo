"use server";

import { revalidateTag } from "next/cache";

import { ItemService } from "@/services/ItemService";
import { SelectedItemsTag } from "@/components/server/Shop";

export async function toggleCartAction(id: string) {
  const existingItem = await ItemService.getSelectedItem(id);

  if (existingItem) {
    await ItemService.updateSelectedItem(id, {
      isInCart: !existingItem.isInCart,
    });
  } else {
    await ItemService.createSelected({
      itemId: id,
      isInCart: true,
    });
  }

  revalidateTag(SelectedItemsTag);
}
