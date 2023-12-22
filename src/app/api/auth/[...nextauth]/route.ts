import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";
import { SIGN_IN_PAGE } from "@/constants/routes";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
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
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }

        if (
          user.email === credentials?.email &&
          user.password === credentials?.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: SIGN_IN_PAGE,
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
