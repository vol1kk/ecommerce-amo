import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category")!;

  const res = await prisma.item.findMany({
    ...(category !== "undefined" && { where: { category: category } }),
    include: { details: { include: { comments: true } } },
  });

  return Response.json(res);
}
