import { AuthService } from "@/services/AuthService";

export const POST = async (req: Request) => {
  const body = await req.json();

  const resp = await AuthService.login(body, true);
  const res = await resp.json();

  return Response.json(res, {
    headers: {
      "Set-Cookie": resp.headers.get("Set-Cookie") || "",
    },
  });
};
