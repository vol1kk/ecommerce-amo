import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import { FavoriteTag } from "@/components/Shop/constants";
import { SelectedItem } from "@/types";

export async function getFavoriteItems() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return [];
  }

  const resp = await fetch(`http://localhost:3000/api/v1/shop/favorite`, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
    next: {
      tags: [FavoriteTag],
    },
  });

  if (!resp.ok) throw new Error("Something went wrong");

  return (await resp.json()) as Promise<SelectedItem[]>;
}
