import { SelectedItem } from "@/types";
import { SelectedItemsTag } from "@/components/server/Shop";
import { apiService } from "@/services/RequestService";

type SelectedItemTypes = "cart" | "wishlist" | undefined;
type SelectedItemFullness = "full" | "half" | "bare" | undefined;

export async function getSelectedItems(
  type: SelectedItemTypes,
  fullness: SelectedItemFullness,
) {
  const searchParams = new URLSearchParams();
  if (type) {
    searchParams.append("type", type);
  }

  if (fullness) {
    searchParams.append("fullness", fullness);
  }

  const resp = await apiService.get(
    `/api/v1/items/selected?${searchParams.toString()}`,
    { next: { tags: [SelectedItemsTag] } },
  );

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<SelectedItem[]>;
}
