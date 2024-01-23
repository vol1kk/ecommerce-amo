import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { SIGN_IN_PAGE } from "@/constants/routes";
import { AuthService } from "@/services/AuthService";
import { TokenService } from "@/services/TokenService";
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
    async jwt({ token, account, user }) {
      let decodedJWT;
      if (token.accessToken) {
        decodedJWT = jwtDecode(token.accessToken);
      }

      const UTCDate = Math.floor(new Date().getTime() / 1000);
      if (UTCDate >= (decodedJWT?.exp || 0)) {
        const resp = await TokenService.refresh();

        await setCookiesAction(resp.headers.getSetCookie());
        token.accessToken = await resp.json();
      }

      if (account?.type === "credentials") {
        token = { ...user, ...token, provider: account?.provider };
      }

      if (account?.type === "oauth") {
        token = await AuthService.oauthLogin({ token, account });
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
