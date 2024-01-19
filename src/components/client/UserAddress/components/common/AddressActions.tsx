import { ReactNode } from "react";

export function AddressActions({ children }: { children: ReactNode }) {
  return <div className="flex gap-2 font-semibold">{children}</div>;
}
