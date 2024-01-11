"use server";

import { apiService, httpService } from "@/services/RequestService";

export async function deleteAddressAction(id: string | undefined) {
  const res = await httpService.delete(`/addresses/${id}`);

  return {
    ok: true,
    data: await res.json(),
  };
}
