"use server";

import { AddressService } from "@/services/AddressService";

export async function deleteAddressAction(id: string) {
  const res = await AddressService.deleteById(id);

  return {
    ok: true,
    data: res,
  };
}
