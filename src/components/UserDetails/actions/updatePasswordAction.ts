"use server";

import getFormDataStr from "@/components/UserDetails/utils/getFormDataStr";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export default async function updatePasswordAction(formData: FormData) {
  const currentPassword = getFormDataStr(formData, "current-pass");
  const newPass = getFormDataStr(formData, "new-pass");
  const repeatedNewPass = getFormDataStr(formData, "repeat-new-pass");

  if (newPass !== repeatedNewPass) {
    throw new Error("New password doesn't match.");
  }

  const session = await getServerSession(authOptions);
  if (!session?.user) return;

  const existingUser = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!existingUser) {
    throw new Error("Something went wrong!");
  }

  const isValidPass = await bcrypt.compare(
    currentPassword,
    existingUser.password || "",
  );

  if (!isValidPass) {
    throw new Error("Current password is incorrect!");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(newPass, salt);

  await prisma.user.update({
    where: { id: session.user.id },
    data: { password: hashedPassword },
  });
}
