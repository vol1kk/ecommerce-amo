import { ReactNode } from "react";

import NextIntlProvider from "@/layouts/Providers/NextIntlProvider";
import SessionProvider from "@/layouts/Providers/SessionProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextIntlProvider>
      <SessionProvider>{children}</SessionProvider>
    </NextIntlProvider>
  );
}
