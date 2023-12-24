import { ReactNode } from "react";
import { ACCOUNT_PAGE } from "@/constants/routes";
import Sidebar from "@/components/Account/components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="grid h-full grid-cols-[1fr,_4fr] p-3">
      <Sidebar />
      {children}
    </main>
  );
}
