import prisma from "@/lib/prisma";
import withAuth from "@/middlewares/withAuth";

export const GET = withAuth(async (req, res) => {
  const searchParams = new URL(req.url).searchParams;
  const action = getActionVariant(searchParams.get("type"));
  const fullness = getFullnessVariant(searchParams.get("fullness"));

  const selectedItems = await prisma.selectedItem.findMany({
    where: {
      userId: req.verified.id,
      ...(action && { [action]: true }),
    },
    include: fullness,
  });

  return Response.json(selectedItems || []);
});

function getFullnessVariant(variant: string | null) {
  switch (variant) {
    case "full":
      return {
        item: { include: { details: { include: { comments: true } } } },
      };
    case "half":
      return { item: { include: { details: true } } };
    case "bare":
      return { item: true };
    default:
      return {};
  }
}

function getActionVariant(variant: string | null) {
  switch (variant) {
    case "wishlist":
      return "isInWishlist";
    case "cart":
      return "isInCart";
    default:
      return null;
  }
}
