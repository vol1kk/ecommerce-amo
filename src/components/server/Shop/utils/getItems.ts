import { Item } from "@/types";
import { ItemsListTag } from "@/components/server/Shop/constants";

export async function getItems(category?: string) {
  const searchParams = new URLSearchParams();

  if (category) {
    searchParams.append("category", category);
  }

  const resp = await fetch(
    `${process.env.NEXTAUTH_URL}/api/v1/shop?${searchParams.toString()}`,
    { next: { tags: [ItemsListTag] } },
  );

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<Item[]>;
}
