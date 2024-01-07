import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";
import { SIGN_IN_PAGE } from "@/constants/routes";
import generateJWT from "@/utils/generateJWT";

export const authOptions: NextAuthOptions = {
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
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: { address: true },
        });

        if (!user || !user?.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user?.password || "",
        );

        if (!isPasswordValid) {
          return null;
        }

        const accessToken = generateJWT(user.id, credentials.email);
        const { password, ...userRest } = Object.assign(user, {
          accessToken,
        });

        return userRest;
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
        const address = await prisma.address.findMany({
          where: { userId: account.userId },
        });

        token.provider = account?.provider;
        token = { ...user, ...token, address };
        token.accessToken = generateJWT(user.id, token.email!);
      }

      if (trigger === "update") {
        const updatedUser = await prisma.user.findUnique({
          where: { id: token.id },
          include: {
            address: true,
          },
        });

        token = { ...token, ...updatedUser };
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
