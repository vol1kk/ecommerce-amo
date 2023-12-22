import { Item } from "@/types";

export async function getItems(category?: string) {
  const resp = await fetch(
    `http://localhost:3000/api/v1/shop?category=${category}`,
  );

  if (!resp.ok) throw new Error("Something went wrong");

  return resp.json() as Promise<Item[]>;
}
