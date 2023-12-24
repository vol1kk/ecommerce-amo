import { ReactNode } from "react";
import { ACCOUNT_PAGE } from "@/constants/routes";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <aside>{ACCOUNT_PAGE} layout placeholder</aside>
      {children}
    </main>
  );
}
