"use server";

import { revalidateTag } from "next/cache";

import { ItemService } from "@/services/ItemService";
import { SelectedItemsTag } from "@/components/server/Shop";

export default async function toggleCartAction(id: string) {
  const existingItem = await ItemService.getSelectedItem(id);

  if (existingItem) {
    // TODO: refactor (?), 'cuz no need to duplicate itemId and params/:id
    await ItemService.updateSelectedItem(id, {
      itemId: id,
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
