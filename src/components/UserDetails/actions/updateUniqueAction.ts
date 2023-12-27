"use server";

import { getServerSession } from "next-auth";

import prisma from "@/lib/prisma";
import verifyJWT from "@/utils/verifyJWT";
import { authOptions } from "@/lib/authOptions";
import getFormDataStr from "@/components/UserDetails/utils/getFormDataStr";

type AllowedUniqueFields = "email" | "phone";

export default async function updateUniqueAction(
  field: AllowedUniqueFields,
  formData: FormData,
) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("Couldn't fetch session.");
  }

  const token = verifyJWT(session.user.accessToken);
  const parsedField = getFormDataStr(formData, field);

  const isExisting = await prisma.user.findFirst({
    where: { [field]: parsedField },
  });

  if (isExisting) {
    throw new Error(`User with this ${field} already exists`);
  } else {
    await prisma.user.update({
      where: { id: token.id },
      data: { [field]: parsedField },
    });
  }
}
