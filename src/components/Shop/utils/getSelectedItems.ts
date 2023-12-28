import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import { SelectedItems } from "@/components/Shop/constants";
import { SelectedItem } from "@/types";
import { headers } from "next/headers";

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
      headers: headers(),
      next: {
        tags: [SelectedItems],
      },
    },
  );

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<SelectedItem[]>;
}
