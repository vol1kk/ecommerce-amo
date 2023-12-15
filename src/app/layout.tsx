import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/SidebarNav";

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
        <div>
          <Header />
          <div className="mt-4 grid grid-cols-[auto_1fr] gap-4 md:mt-0 md:block">
            <aside className="p-2 pl-4 md:hidden">
              <h2 className="mb-4 text-lg font-bold text-boldColor">
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
