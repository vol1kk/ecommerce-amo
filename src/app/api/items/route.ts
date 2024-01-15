import { ItemService } from "@/services/ItemService";

export const GET = async (req: Request) => {
  const category = new URL(req.url).searchParams.get("category") || undefined;

  const res = await ItemService.getItems(category);

  return Response.json(res);
};
