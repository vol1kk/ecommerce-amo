"use server";

import { revalidateTag } from "next/cache";
import { UserSessionTag } from "@/services/UserService";
import { AddressService } from "@/services/AddressService";

export async function createAddressAction(_: any, body: FormData) {
  const createdAddress = await AddressService.create(Object.fromEntries(body));

  revalidateTag(UserSessionTag);

  return createdAddress;
}
