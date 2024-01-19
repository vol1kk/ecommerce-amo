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
  static serviceUrl =
    typeof window === "undefined"
      ? this.baseUrl + "/auth"
      : this.baseUrl + "/users";

  static async register(body: AuthBody): Promise<Session["user"]> {
    const resp = await this.post(`${this.serviceUrl}/register`, { body });
    return resp.json();
  }

  static async login(body: AuthBody): Promise<Session["user"]> {
    const resp = await this.post(`${this.serviceUrl}/login`, { body });

    if (!resp.ok) {
      throw new Error("Something went wrong during login");
    }

    return resp.json();
  }

  static async oauthLogin(body: OAuthBody): Promise<Session["user"]> {
    const resp = await this.post(`${this.serviceUrl}/oauth`, { body });
    return resp.json();
  }
}
