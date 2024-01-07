import withAuth from "@/middlewares/withAuth";
import prisma from "@/lib/prisma";

export const POST = withAuth(async req => {
  const body = await req.json();

  const createdAddress = await prisma.address.create({
    data: {
      ...body,
      user: {
        connect: { id: req.verified.id },
      },
    },
  });

  return Response.json(createdAddress);
});
