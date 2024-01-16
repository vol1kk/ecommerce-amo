import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";

export default function NextIntlProvider({
  children,
}: {
  children: ReactNode;
}) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
