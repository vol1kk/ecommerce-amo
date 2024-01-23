type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD";

type RequestBodyType = Omit<RequestInit, "body"> & { body?: any };

export class RequestService {
  static baseUrl: string = (typeof window === "undefined"
    ? process.env.NEST_API_URL
    : process.env.NEXT_PUBLIC_API_URL) as string;

  protected static patch(url: string, options?: RequestBodyType) {
    return this._makeRequest(url, "PATCH", options);
  }

  protected static post(url: string, options?: RequestBodyType) {
    return this._makeRequest(url, "POST", options);
  }

  protected static delete(url: string, options?: RequestBodyType) {
    return this._makeRequest(url, "DELETE", options);
  }

  protected static get(url: string, options?: RequestBodyType) {
    return this._makeRequest(url, "GET", options);
  }

  private static async _makeRequest(
    url: string,
    method: HttpMethod,
    options?: RequestBodyType,
  ) {
    let strippedOptions;
    if (options) {
      const { body, method: reqMethod, headers, ...rest } = options;
      strippedOptions = rest;
    }

    let cookies;
    let token: string | undefined;
    if (typeof window === "undefined") {
      cookies = (await import("next/headers")).cookies().toString();

      const getServerSession = (await import("next-auth")).getServerSession;
      const data = await getServerSession(
        (await import("@/lib/authOptions")).authOptions,
      );

      token = data?.user.accessToken;
    }

    const canHaveBody = method !== "GET" && options?.body;
    const reqOptions: RequestInit = {
      method,
      headers: {
        ...options?.headers,
        ...(cookies && { cookie: cookies }),
        ...(token && { authorization: `Bearer ${token}` }),
        ...(canHaveBody && { "Content-Type": "application/json" }),
      },
      ...(canHaveBody && { body: JSON.stringify(options.body) }),
      ...strippedOptions,
    };

    return fetch(url, reqOptions);
  }
}
