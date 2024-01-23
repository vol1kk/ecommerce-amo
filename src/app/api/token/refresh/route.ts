import { cookies } from "next/headers";

export const POST = async () => {
  const resp = await fetch(`${process.env.NEST_API_URL}/token/refresh`, {
    method: "POST",
    headers: {
      cookie: cookies().toString() || "",
    },
    credentials: "include",
  });

  const res = (await resp.json()) as Record<
    "accessToken" | "refreshToken",
    string
  >;

  return Response.json(res.accessToken, {
    headers: {
      "Set-Cookie": `refreshToken=${res.refreshToken}; HttpOnly;`,
    },
  });
};
