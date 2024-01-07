import prisma from "@/lib/prisma";
import withAuth from "@/middlewares/withAuth";

type ParamsType = { params: { id: string } };

export const PATCH = withAuth<ParamsType>(async (req, params) => {
  const selectedId = params.params.id;

  const condition = {
    where: {
      id: selectedId,
      userId: req.verified.id,
    },
  };

  const existingAddress = await prisma.address.findUnique(condition);
  if (!existingAddress) {
    return Response.json("Not Found", { status: 404 });
  }

  return await prisma.$transaction(async tx => {
    const data = await req.json();
    const keys = Object.keys(data);

    if (keys.length === 1 && keys.at(0) === "isDefault") {
      await tx.address.updateMany({
        where: { isDefault: true },
        data: { isDefault: false },
      });
    }

    const updatedAddress = await prisma.address.update({
      ...condition,
      data,
    });

    return Response.json(updatedAddress);
  });
});

export const PUT = withAuth<ParamsType>(async (req, params) => {
  const selectedId = params.params.id;

  const condition = {
    where: {
      id: selectedId,
      userId: req.verified.id,
    },
  };

  const existingAddress = await prisma.address.findUnique(condition);
  if (!existingAddress) {
    return Response.json("Not Found", { status: 404 });
  }

  const body = await req.json();
  const updatedAddress = await prisma.address.update({
    ...condition,
    data: body,
  });

  return Response.json(updatedAddress);
});

export const DELETE = withAuth<ParamsType>(async (req, params) => {
  const selectedId = params.params.id;

  const condition = {
    where: {
      id: selectedId,
      userId: req.verified.id,
    },
  };

  const existingAddress = await prisma.address.findUnique(condition);
  if (!existingAddress) {
    return Response.json("Not Found", { status: 404 });
  }

  const deletedAddress = await prisma.address.delete(condition);

  return Response.json(deletedAddress);
});
