"use server";

import { getServerSession } from "next-auth";

import prisma from "@/lib/prisma";
import verifyJWT from "@/utils/verifyJWT";
import { authOptions } from "@/lib/authOptions";

export async function updateNameAction(formData: FormData) {
  if (!formData.has("name") || !formData.has("surname")) {
    throw new Error("FormData doesn't have required fields");
  }

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Session isn't available.");
  }

  const verifiedJWT = verifyJWT(session.user.accessToken);

  const name = (formData.get("name") ?? "") as string;
  const surname = (formData.get("surname") ?? "") as string;

  await prisma.user.update({
    where: { id: verifiedJWT.id },
    data: { name, surname },
  });
}
