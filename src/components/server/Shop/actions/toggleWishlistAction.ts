"use server";

import { httpService } from "@/services/RequestService";
import { SelectedItem } from "@/types";
import { revalidateTag } from "next/cache";
import { SelectedItemsTag } from "@/components/server/Shop";

export default async function toggleWishlistAction(id: string) {
  const resp = await httpService.get(`/selected/${id}`);
  const existingItem = (await resp.json()) as SelectedItem | null;

  if (existingItem) {
    await httpService.patch(`/selected/${id}`, {
      body: {
        itemId: id,
        isInWishlist: !existingItem.isInWishlist,
      },
    });
  } else {
    await httpService.post(`/selected`, {
      body: {
        itemId: id,
        isInWishlist: true,
      },
    });
  }

  revalidateTag(SelectedItemsTag);
}
