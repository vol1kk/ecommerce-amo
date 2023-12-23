import bcrypt from "bcrypt";

import prisma from "@/lib/prisma";
import { RegisterCredentials } from "@/components/SignIn";

export async function POST(request: Request) {
  const data = (await request.json()) as RegisterCredentials;

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    return Response.json({
      success: false,
      error: {
        password: false,
        email: true,
        text: "Provided E-Mail is already in use!",
      },
    });
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(data.password, salt);
  await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
    },
  });

  return Response.json({ success: true, data });
}
