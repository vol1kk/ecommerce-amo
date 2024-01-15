"use server";

import { AddressService } from "@/services/AddressService";
import getFormDataStr from "@/components/client/UserDetails/utils/getFormDataStr";

export async function updateAddressAction(state: any, formData: FormData) {
  const id = getFormDataStr(formData, "id");

  // TODO: smh zod doesn't delete id in UpdateAddressDto
  formData.delete("id");

  const res = await AddressService.update(id, Object.fromEntries(formData));

  return {
    ok: true,
    data: res,
  };
}
