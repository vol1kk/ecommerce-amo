"use client";

import { ReactNode } from "react";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

export default function SessionProvider({ children }: { children: ReactNode }) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
