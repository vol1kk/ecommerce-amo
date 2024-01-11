"use server";

import { apiService, httpService } from "@/services/RequestService";
import getFormDataStr from "@/components/client/UserDetails/utils/getFormDataStr";

export async function updateAddressAction(state: any, formData: FormData) {
  const id = getFormDataStr(formData, "id");

  // TODO: smh zod doesn't delete id in UpdateAddressDto
  formData.delete("id");

  const resp = await httpService.patch(`/addresses/${id}`, {
    body: Object.fromEntries(formData),
  });

  const res = await resp.json();

  return {
    ok: true,
    data: res,
  };
}
