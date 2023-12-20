import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { SIGN_IN_PAGE } from "@/constants/routes";

const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Login", type: "text", placeholder: "ruzytskyivn" },
        password: { label: "Password", type: "text", placeholder: "***" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          login: "admin",
          password: "admin",
          email: "admin@example.com",
          test: 123,
        };

        if (
          user.login === credentials?.login &&
          user.password === credentials?.password
        ) {
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter

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
