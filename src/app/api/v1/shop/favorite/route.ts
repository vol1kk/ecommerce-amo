import jwt from "jsonwebtoken";

import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    throw new Error("No token");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      email: string;
    };

    const favoriteItems = (
      await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          favoriteItems: { include: { item: { include: { details: true } } } },
        },
      })
    )?.favoriteItems;

    return Response.json(favoriteItems || []);
  } catch (e) {
    throw new Error("Couldn't decode token...");
  }
}
