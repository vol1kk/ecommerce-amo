import jwt from "jsonwebtoken";

import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    throw new Error("Authorization header must be set.");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      email: string;
    };

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
  } catch (e) {
    throw new Error("Something went wrong");
  }
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
