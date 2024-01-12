"use server";

import { httpService } from "@/services/RequestService";
import { SelectedItem } from "@/types";
import { revalidateTag } from "next/cache";
import { SelectedItemsTag } from "@/components/server/Shop";

export default async function toggleCartAction(id: string) {
  const resp = await httpService.get(`/selected/${id}`);
  const existingItem = (await resp.json()) as SelectedItem | null;

  if (existingItem) {
    await httpService.patch(`/selected/${id}`, {
      body: {
        itemId: id,
        isInCart: !existingItem.isInCart,
      },
    });
  } else {
    await httpService.post(`/selected`, {
      body: {
        itemId: id,
        isInCart: true,
      },
    });
  }

  revalidateTag(SelectedItemsTag);
}
