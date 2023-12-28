"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function updateUserAction(formData: FormData) {
  const session = await getServerSession(authOptions);

  await fetch(`${process.env.NEXTAUTH_URL}/api/v1/user/update`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
}
