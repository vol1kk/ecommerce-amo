"use server";

import { apiService } from "@/services/RequestService";

export async function deleteAddressAction(id: string | undefined) {
  const res = await apiService.delete(`/api/v1/address/${id}`);

  if (!res.ok) {
    return {
      ok: false,
      error: {
        status: res.status,
        text: res.statusText,
      },
    };
  }

  return {
    ok: true,
    data: await res.json(),
  };
}
