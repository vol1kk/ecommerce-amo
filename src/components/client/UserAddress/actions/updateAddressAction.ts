"use server";

import { revalidateTag } from "next/cache";

import { UserSessionTag } from "@/services/UserService";
import { AddressService } from "@/services/AddressService";

export async function updateAddressAction(
  id: string,
  _: any,
  formData: FormData,
) {
  const address = await AddressService.update(id, Object.fromEntries(formData));

  revalidateTag(UserSessionTag);

  return address;
}
