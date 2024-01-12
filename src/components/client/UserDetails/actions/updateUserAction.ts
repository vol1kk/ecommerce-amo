"use server";

import { httpService } from "@/services/RequestService";

export async function updateUserAction(
  id: string,
  initialState: any,
  formData: FormData,
) {
  const res = await httpService.patch(`/users/${id}`, {
    body: Object.fromEntries(formData),
  });

  return await res.json();
}
