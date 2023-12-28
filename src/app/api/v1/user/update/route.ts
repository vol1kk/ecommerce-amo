import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import withAuth from "@/middlewares/withAuth";

export const POST = withAuth(async req => {
  const data = await req.json();

  if ("currentPass" in data && "newPass" in data) {
    await updatePassword(req.verified.id, data);
    return Response.json("whatever");
  } else {
    const updatedUser = await prisma.user.update({
      where: { id: req.verified.id },
      data: { ...data },
    });

    return Response.json("whatever");
  }
});

async function updatePassword(
  userId: string,
  data: { currentPass: string; newPass: string },
) {
  const existingUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  const match = await bcrypt.compare(
    data.currentPass,
    existingUser?.password || "",
  );

  if (!match) {
    return Response.json("Error");
  }

  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(data.newPass, salt);
  console.log(data.newPass, hashedPass);

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPass },
  });

  return Response.json("updated");
}
