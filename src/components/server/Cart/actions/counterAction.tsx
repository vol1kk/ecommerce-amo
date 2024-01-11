"use server";

import { revalidateTag } from "next/cache";
import getFormDataStr from "@/components/client/UserDetails/utils/getFormDataStr";
import { SelectedItemsTag } from "@/components/server/Shop";
import { apiService, httpService } from "@/services/RequestService";

const AllowedActions = ["increase", "decrease"];

export default async function counterAction(
  id: string,
  currState: number,
  formData: FormData,
) {
  const action = getFormDataStr(formData, "action");

  if (!AllowedActions.includes(action)) {
    throw new Error("Unsupported action passed");
  }

  let newQuantity;
  if (action === "increase") {
    newQuantity = currState + 1;
  }

  if (action === "decrease") {
    if (currState === 1) newQuantity = 1;
    if (currState > 1) newQuantity = currState - 1;
  }

  await httpService.patch(`/selected/${id}`, {
    body: {
      quantity: newQuantity,
    },
  });

  revalidateTag(SelectedItemsTag);
}
