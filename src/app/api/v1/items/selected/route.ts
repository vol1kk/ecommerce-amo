import prisma from "@/lib/prisma";
import verifyJWT from "@/utils/verifyJWT";

export async function GET(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    throw new Error("Authorization header must be set.");
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyJWT(token);

  const searchParams = new URL(request.url).searchParams;
  const action = getActionVariant(searchParams.get("type"));
  const fullness = getFullnessVariant(searchParams.get("fullness"));

  const selectedItems = await prisma.selectedItem.findMany({
    where: {
      userId: decoded.id,
      ...(action && { [action]: true }),
    },
    include: fullness,
  });

  return Response.json(selectedItems || []);
}

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
