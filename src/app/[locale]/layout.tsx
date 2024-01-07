import "@/app/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/layouts/Providers/Providers";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Euphoria",
  description: "Keep it classy",
};

type RootLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-col">{children}</div>
            <div id="overlay" />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
