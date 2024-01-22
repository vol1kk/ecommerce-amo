import { JWT } from "next-auth/jwt";
import { Account, Session } from "next-auth";

import { RequestService } from "@/services/RequestService";

type AuthBody = {
  email: string;
  password: string;
};

type OAuthBody = {
  token: JWT;
  account: Account;
};

export class AuthService extends RequestService {
  static async register(
    body: AuthBody,
    isServer = false,
  ): Promise<Session["user"]> {
    const resp = await this.post(this.getAuthUrl(isServer) + "/register", {
      body,
    });

    return resp.json();
  }

  static async login(body: AuthBody, isServer = false): Promise<Response> {
    const resp = await this.post(this.getAuthUrl(isServer) + "/login", {
      body,
    });

    if (!resp.ok) {
      throw new Error("Something went wrong during login");
    }

    return resp;
  }

  static async oauthLogin(
    body: OAuthBody,
    isServer = false,
  ): Promise<Session["user"]> {
    const resp = await this.post(this.getAuthUrl(isServer) + `/oauth`, {
      body,
    });

    return resp.json();
  }

  private static getAuthUrl(isServer = false) {
    if (isServer) return "http://localhost:3001/auth";

    return "http://localhost:3000/api/users";
  }
}
