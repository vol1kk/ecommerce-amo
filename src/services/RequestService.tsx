import { cookies } from "next/headers";

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

    const reqOptions: RequestInit = {
      method,
      headers: {
        cookie: cookies().toString(),
        ...(options?.body && { "Content-Type": "application/json" }),
        ...options?.headers,
      },
      ...(options?.body && { body: JSON.stringify(options.body) }),
      ...strippedOptions,
    };

    return await fetch(this.baseURL + url, reqOptions);
  }
}

export const apiService = new RequestService(
  process.env.NEXTAUTH_URL as string,
);
