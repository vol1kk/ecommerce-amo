import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import withAuth from "@/middlewares/withAuth";

export type UpdateErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: {
    old?: string;
    new?: string;
  };
};

export type UpdateResponseSuccess = {
  success: true;
  data: any;
};

export type UpdateResponseError = {
  success: false;
  error: UpdateErrors;
};

export type UpdateResponse = UpdateResponseError | UpdateResponseSuccess;

export const POST = withAuth(async req => {
  const data = await req.json();

  if ("currentPass" in data) {
    return await updatePassword(req.verified.id, data);
  } else {
    await prisma.user.update({
      where: { id: req.verified.id },
      data: { ...data },
    });

    return Response.json({ success: true, data });
  }
});

async function updatePassword(
  userId: string,
  data: { currentPass: string; newPass: string; repeatedPass: string },
) {
  if (data.newPass !== data.repeatedPass) {
    return Response.json({
      success: false,
      error: { password: { new: "New passwords don't match" } },
    } satisfies UpdateResponseError);
  }

  const existingUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  const match = await bcrypt.compare(
    data.currentPass,
    existingUser?.password || "",
  );

  if (!match) {
    return Response.json({
      success: false,
      error: { password: { old: "Invalid password" } },
    } satisfies UpdateResponseError);
  }

  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(data.newPass, salt);

  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPass },
  });

  return Response.json({ success: true, data: {} } as UpdateResponseSuccess);
}
