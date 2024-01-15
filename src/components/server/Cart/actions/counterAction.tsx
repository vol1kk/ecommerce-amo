"use server";

import { revalidateTag } from "next/cache";

import { ItemService } from "@/services/ItemService";
import { SelectedItemsTag } from "@/components/server/Shop";
import getFormDataStr from "@/components/client/UserDetails/utils/getFormDataStr";

const AllowedActions = ["increase", "decrease"];

// TODO: Make counter client + use useDebounce to update ui fast
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

  await ItemService.updateSelectedItem(id, {
    quantity: newQuantity,
  });

  revalidateTag(SelectedItemsTag);
}
