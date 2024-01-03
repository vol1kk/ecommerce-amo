import "@/app/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/layouts/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Euphoria",
  description: "Keep it classy",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">{children}</div>
          <div id="overlay" />
        </Providers>
      </body>
    </html>
  );
}