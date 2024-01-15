import { AddressService } from "@/services/AddressService";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const id = params.id;
  const res = await AddressService.deleteById(id);

  return Response.json(res);
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const body = await req.json();

  const id = params.id;
  const res = await AddressService.update(id, body);

  return Response.json(res);
};
