"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import getFormDataStr from "@/components/client/UserDetails/utils/getFormDataStr";
import { revalidateTag } from "next/cache";
import { SelectedItemsTag } from "@/components/server/Shop";

const AllowedActions = ["increase", "decrease"];

export default async function counterAction(
  id: string,
  currState: number,
  formData: FormData,
) {
  const session = await getServerSession(authOptions);

  const action = getFormDataStr(formData, "action");

  if (!AllowedActions.includes(action)) {
    throw new Error("Unsupported action passeds");
  }

  let newQuantity;
  if (action === "increase") {
    newQuantity = currState + 1;
  }

  if (action === "decrease") {
    if (currState === 1) newQuantity = 1;
    if (currState > 1) newQuantity = currState - 1;
  }

  await fetch(`${process.env.NEXTAUTH_URL}/api/v1/items/selected/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
    body: JSON.stringify({
      quantity: newQuantity,
    }),
  });

  revalidateTag(SelectedItemsTag);
}
