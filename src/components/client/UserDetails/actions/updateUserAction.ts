"use server";

import { UserService, UserSessionTag } from "@/services/UserService";
import { revalidateTag } from "next/cache";

export async function updateUserAction(
  id: string,
  initialState: any,
  formData: FormData,
) {
  const user = UserService.update(id, Object.fromEntries(formData));
  revalidateTag(UserSessionTag);

  return user;
}
