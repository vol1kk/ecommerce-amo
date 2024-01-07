"use server";

import { apiService } from "@/services/RequestService";
import { FormAddressAction } from "@/components/client/UserAddress/types";

export const createAddressAction: FormAddressAction = async function (
  state,
  formData,
) {
  const res = await apiService.post("/api/v1/address", {
    body: Object.fromEntries(formData),
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();
  return { ok: true, data };
};
