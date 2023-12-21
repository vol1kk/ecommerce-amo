import "@/app/globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import Providers from "@/layouts/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Euphoria",
  description: "Keep it classy",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-full flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <div id="overlay" />
        </Providers>
      </body>
    </html>
  );
}
