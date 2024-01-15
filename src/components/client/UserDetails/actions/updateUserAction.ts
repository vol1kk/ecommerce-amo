"use server";

import { UserService } from "@/services/UserService";

export async function updateUserAction(
  id: string,
  initialState: any,
  formData: FormData,
) {
  return UserService.update(id, Object.fromEntries(formData));
}
