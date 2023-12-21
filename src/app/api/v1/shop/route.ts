import prisma from "@/lib/prisma";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  const res = await prisma.item.findMany({
    include: { details: { include: { comments: true } } },
    ...(category && { where: { category } }),
  });

  return Response.json(res);
}
