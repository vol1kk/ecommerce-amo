import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";

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

  async delete(url: string, options?: RequestBodyType) {
    return await this._makeRequest(url, "DELETE", options);
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

    let token;
    if (process.env.NEXTAUTH_URL) {
      const session = await getServerSession(authOptions);
      token = session?.user.accessToken;
    } else {
      const authHeader = (options?.headers as { authorization?: string })
        .authorization;

      const values = authHeader?.split(" ") || [];
      token = values[1];
    }


    const canHaveBody = method !== "GET" && options?.body;
    const reqOptions: RequestInit = {
      method,
      headers: {
        authorization: `Bearer ${token}`,
        ...(canHaveBody && { "Content-Type": "application/json" }),
        ...options?.headers,
      },
      ...(canHaveBody && { body: JSON.stringify(options.body) }),
      ...strippedOptions,
    };

    const URL = this.baseURL ? this.baseURL + url : url;
    return await fetch(URL, reqOptions);
  }
}

export const apiService = new RequestService(
  process.env.NEXTAUTH_URL as string,
);

export const httpService = new RequestService("http://localhost:3001");
