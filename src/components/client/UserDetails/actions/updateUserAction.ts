"use server";

import { apiService } from "@/services/RequestService";

export async function updateUserAction(initialState: any, formData: FormData) {
  const res = await apiService.post("/api/v1/user/update", {
    body: Object.fromEntries(formData),
  });

  return await res.json();
}
