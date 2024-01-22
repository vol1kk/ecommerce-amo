import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { SIGN_IN_PAGE } from "@/constants/routes";
import { AuthService } from "@/services/AuthService";
import { UserService } from "@/services/UserService";
import setCookiesAction from "@/utils/setCookiesAction";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "me@example.com" },
        password: { label: "Password", type: "password", placeholder: "***" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const resp = await AuthService.login(credentials);
        await setCookiesAction(resp.headers.getSetCookie());

        return await resp.json();
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user, trigger }) {
      if (account?.type === "credentials") {
        token.provider = account?.provider;
        token = { ...user, ...token };
      }

      if (account?.type === "oauth") {
        token = await AuthService.oauthLogin({ token, account });
      }

      if (trigger === "update") {
        const updatedUser = await UserService.findOne(token.id);
        token = Object.assign(token, updatedUser);
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: SIGN_IN_PAGE,
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
