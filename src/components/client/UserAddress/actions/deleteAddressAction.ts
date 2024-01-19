"use server";

import { AddressService } from "@/services/AddressService";
import { revalidateTag } from "next/cache";
import { UserSessionTag } from "@/services/UserService";

export async function deleteAddressAction(id: string) {
  const deletedAddress = await AddressService.deleteById(id);

  revalidateTag(UserSessionTag);

  return deletedAddress;
}
