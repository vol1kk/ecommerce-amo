import { ItemService, SelectedItemTypes } from "@/services/ItemService";

export const GET = async (req: Request) => {
  const category = new URL(req.url).searchParams.get("type") || "all";

  const res = await ItemService.getSelectedItems(category as SelectedItemTypes);

  return Response.json(res);
};
