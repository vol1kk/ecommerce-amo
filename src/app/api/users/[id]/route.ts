import { UserService } from "@/services/UserService";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const id = params.id;
  const res = await UserService.findOne(id);

  return Response.json(res);
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const body = await req.json();

  const id = params.id;
  const res = await UserService.update(id, body);

  return Response.json(res);
};
