import NextAuth, { DefaultSession } from "next-auth";
import { Address } from "@/components/client/UserAddress/components/Form/AddressForm";

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
      address: Address[];
      accessToken: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    address: Address[];
    surname: string | null;
    phone: string | null;
    provider: string;
    accessToken: string;
  }
}
