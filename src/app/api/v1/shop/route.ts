import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const category = searchParams.get("category");

  const res = await prisma.item.findMany({
    ...(category && { where: { category: category } }),
  });

  return Response.json(res);
}
