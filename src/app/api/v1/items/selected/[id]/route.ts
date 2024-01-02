import prisma from "@/lib/prisma";
import withAuth from "@/middlewares/withAuth";

type ParamsType = { params: { id: string } };

export const PATCH = withAuth<ParamsType>(async (req, params) => {
  const updatedFields = await req.json();

  const selectedId = params.params.id;
  if (!selectedId) {
    return Response.json({ success: false, error: "Item ID isn't provided" });
  }

  const updatedItem = await prisma.selectedItem.update({
    where: {
      id: selectedId,
      userId: req.verified.id,
    },
    data: updatedFields,
  });

  return Response.json({ success: true, data: updatedItem });
});

export const DELETE = withAuth<ParamsType>(async (req, params) => {
  console.log(req.method);

  return Response.json({ success: true });
});
