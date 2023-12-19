import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Sidebar";

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
        <div className="flex h-full flex-col">
          <Header />
          <div className="mt-4 flex flex-1 gap-4 md:mt-0 md:flex-col">
            <aside className="p-2 pb-4 pl-4 sm:hidden">
              <h2 className="mb-4 text-lg font-bold text-boldColor md:text-center">
                Categories
              </h2>
              <Navbar />
            </aside>
            {children}
          </div>
          <Footer />
        </div>
        <div id="overlay" />
      </body>
    </html>
  );
}
