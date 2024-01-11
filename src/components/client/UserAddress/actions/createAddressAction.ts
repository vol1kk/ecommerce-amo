"use server";

import { httpService } from "@/services/RequestService";
import { FormAddressAction } from "@/components/client/UserAddress/types";

export const createAddressAction: FormAddressAction = async function (
  token,
  state,
  formData,
) {
  const res = await httpService.post("/addresses", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: Object.fromEntries(formData),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return { ok: true, data };
};
