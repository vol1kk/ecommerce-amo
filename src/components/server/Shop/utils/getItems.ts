import { Item } from "@/types";
import { httpService } from "@/services/RequestService";
import { ItemsListTag } from "@/components/server/Shop/constants";

export async function getItems(category?: string) {
  const searchParams = new URLSearchParams();

  if (category) {
    searchParams.append("category", category);
  }

  const resp = await httpService.get(`/items?${searchParams.toString()}`, {
    next: { tags: [ItemsListTag] },
  });

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<Item[]>;
}
