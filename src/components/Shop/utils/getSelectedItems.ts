import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import { SelectedItems } from "@/components/Shop/constants";
import { SelectedItem } from "@/types";

type SelectedItemTypes = "cart" | "wishlist";

export async function getSelectedItems(type?: SelectedItemTypes) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return [];
  }

  const queryParam = type ? `?type=${type}` : "";

  const resp = await fetch(
    `http://localhost:3000/api/v1/items/selected${queryParam}`,
    {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
      next: {
        tags: [SelectedItems],
      },
    },
  );

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<SelectedItem[]>;
}
