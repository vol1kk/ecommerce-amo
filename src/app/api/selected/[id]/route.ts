import { ItemService } from "@/services/ItemService";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const id = params.id;
  const res = await ItemService.getSelectedItem(id);

  return Response.json(res);
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const body = await req.json();

  const id = params.id;
  const res = await ItemService.updateSelectedItem(id, body);

  return Response.json(res);
};
