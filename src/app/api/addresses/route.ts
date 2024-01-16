import { AddressService } from "@/services/AddressService";

export const POST = async (req: Request) => {
  const body = await req.json();

  const res = await AddressService.create(body);

  return Response.json(res);
};
