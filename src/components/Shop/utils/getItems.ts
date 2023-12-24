import { Item } from "@/types";
import { ItemsListTag } from "@/components/Shop/constants";

export async function getItems(category?: string) {
  const resp = await fetch(
    `http://localhost:3000/api/v1/shop?category=${category}`,
    { next: { tags: [ItemsListTag] } },
  );

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<Item[]>;
}
