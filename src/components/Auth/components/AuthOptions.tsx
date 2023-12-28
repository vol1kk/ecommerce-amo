import { ReactNode } from "react";

export function AuthOptions({ children }: { children: ReactNode }) {
  return (
    <section className="grid flex-1 place-content-center p-4">
      {children}
    </section>
  );
}
