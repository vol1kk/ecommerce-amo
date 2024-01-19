import { AuthService } from "@/services/AuthService";

export const POST = async (req: Request) => {
  const body = await req.json();

  const res = await AuthService.register(body);

  return Response.json(res);
};
