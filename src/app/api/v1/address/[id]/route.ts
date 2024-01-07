import withAuth from "@/middlewares/withAuth";
import prisma from "@/lib/prisma";

export const DELETE = withAuth<{ params: { id: string } }>(
  async (req, params) => {
    const selectedId = params.params.id;

    const condition = {
      where: {
        id: selectedId,
        userId: req.verified.id,
      },
    };

    const existingItem = await prisma.address.findUnique(condition);
    if (!existingItem) {
      return Response.json("Not Found", { status: 404 });
    }

    const deletedAddress = await prisma.address.delete(condition);

    return Response.json(deletedAddress);
  },
);
