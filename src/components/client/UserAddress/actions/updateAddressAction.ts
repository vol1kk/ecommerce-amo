"use server";

import { apiService } from "@/services/RequestService";
import extractUpdateData from "@/components/client/UserAddress/utils/extractUpdateData";

export async function updateAddressAction(state: any, formData: FormData) {
  const { id, body } = extractUpdateData(formData);

  const resp = await apiService.patch(`/api/v1/address/${id}`, {
    body,
  });

  if (!resp.ok) {
    return {
      ok: false,
      error: {
        status: resp.status,
        text: resp.statusText,
      },
    };
  }

  const res = await resp.json();

  return {
    ok: true,
    data: res,
  };
}
