type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD";

type RequestBodyType = Omit<RequestInit, "body"> & { body?: any };

class RequestService {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async patch(url: string, options?: RequestBodyType) {
    return await this._makeRequest(url, "PATCH", options);
  }

  async post(url: string, options?: RequestBodyType) {
    return await this._makeRequest(url, "POST", options);
  }

  async get(url: string, options?: RequestBodyType) {
    return await this._makeRequest(url, "GET", options);
  }

  async _makeRequest(
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
    if (process.env.NEXTAUTH_URL) {
      // Checking whether called from server, or client component
      // because NEXTAUTH_URL is undefined if called on client
      cookies = (await import("next/headers")).cookies().toString();
    } else {
      cookies = null;
    }

    const canHaveBody = method !== "GET" && options?.body;
    const reqOptions: RequestInit = {
      method,
      headers: {
        ...(cookies && { cookie: cookies }),
        ...(canHaveBody && { "Content-Type": "application/json" }),
        ...options?.headers,
      },
      ...(canHaveBody && { body: JSON.stringify(options.body) }),
      ...strippedOptions,
    };

    return await fetch(this.baseURL ? this.baseURL + url : url, reqOptions);
  }
}

export const apiService = new RequestService(
  process.env.NEXTAUTH_URL as string,
);
