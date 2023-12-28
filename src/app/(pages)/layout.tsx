import "@/app/globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Sidebar";
import Providers from "@/layouts/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Euphoria",
  description: "Keep it classy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 flex-col">
              <aside className="p-2 pb-4 pl-4 sm:hidden">
                <h2 className="mb-2  text-center text-lg font-bold text-boldColor">
                  Categories
                </h2>
                <Navbar />
              </aside>
              {children}
            </div>
            <Footer />
          </div>
          <div id="overlay" />
        </Providers>
      </body>
    </html>
  );
}
