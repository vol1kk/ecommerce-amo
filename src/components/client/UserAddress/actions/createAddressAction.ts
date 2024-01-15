"use server";

import { AddressService } from "@/services/AddressService";
import { FormAddressAction } from "@/components/client/UserAddress/types";

export const createAddressAction: FormAddressAction = async function (
  state,
  formData,
) {
  const res = await AddressService.create(Object.fromEntries(formData));

  return { ok: true, data: res };
};
