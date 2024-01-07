import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export async function GET(request: Request, response: Response) {
  const searchParams = new URL(request.url).searchParams;
  const category = searchParams.get("category");

  const res = await prisma.item.findMany({
    ...(category && { where: { category: category } }),
  });

  return Response.json(res);
}
