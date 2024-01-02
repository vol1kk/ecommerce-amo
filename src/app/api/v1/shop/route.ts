import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export async function GET(request: Request, response: Response) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category")!;

  const res = await prisma.item.findMany({
    ...(category !== "undefined" && { where: { category: category } }),
    include: { details: { include: { comments: true } } },
  });

  return Response.json(res);
}
