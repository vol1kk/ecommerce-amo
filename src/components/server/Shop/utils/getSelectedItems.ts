import { SelectedItem } from "@/types";
import { httpService } from "@/services/RequestService";
import { SelectedItemsTag } from "@/components/server/Shop";

type SelectedItemTypes = "all" | "cart" | "wishlist";

export async function getSelectedItems(type: SelectedItemTypes) {
  const searchParams = new URLSearchParams();

  if (type) {
    searchParams.append("type", type);
  }

  const resp = await httpService.get(`/selected?${searchParams.toString()}`, {
    next: { tags: [SelectedItemsTag] },
  });

  if (!resp.ok) throw new Error(resp.statusText);

  return (await resp.json()) as Promise<SelectedItem[]>;
}
