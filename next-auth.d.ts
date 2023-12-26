import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    id: string;
    surname: string | null;
    accessToken: string;
  }

  interface Session {
    user: {
      id: string;
      surname: string | null;
      accessToken: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    surname: string | null;
    accessToken: string;
  }
}
