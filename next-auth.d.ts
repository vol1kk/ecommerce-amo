import { DefaultSession } from "next-auth";
import { TAddress } from "@/components/client/UserAddress";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    id: string;
    surname: string | null;
    phone: string | null;
    accessToken: string;
  }

  interface Session {
    user: {
      id: string;
      surname: string | null;
      phone: string | null;
      provider: string;
      address: TAddress[];
      accessToken: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    address: TAddress[];
    surname: string | null;
    phone: string | null;
    provider: string;
    accessToken: string;
  }
}
