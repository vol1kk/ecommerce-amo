import getCookieAction from "@/utils/getCookieAction";

export class TokenService {
  static async refresh(): Promise<Response> {
    const cookies = await getCookieAction();

    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token/refresh`, {
      method: "POST",
      headers: {
        cookie: cookies?.toString() || "",
      },
      credentials: "include",
    });
  }
}
