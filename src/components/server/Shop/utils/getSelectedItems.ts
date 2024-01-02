import { getServerSession } from "next-auth";

import { SelectedItem } from "@/types";
import { authOptions } from "@/lib/authOptions";
import { SelectedItemsTag } from "@/components/server/Shop";

type SelectedItemTypes = "cart" | "wishlist" | undefined;
type SelectedItemFullness = "full" | "half" | "bare" | undefined;

export async function getSelectedItems(
  type: SelectedItemTypes,
  fullness: SelectedItemFullness,
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return [];
  }

  const searchParams = new URLSearchParams();
  if (type) {
    searchParams.append("type", type);
  }

  if (fullness) {
    searchParams.append("fullness", fullness);
  }

  const resp = await fetch(
    `${
      process.env.NEXTAUTH_URL
    }/api/v1/items/selected?${searchParams.toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user.accessToken}`,
      },
      next: {
        tags: [SelectedItemsTag],
      },
    },
  );

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<SelectedItem[]>;
}
