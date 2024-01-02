import "@/app/globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import Providers from "@/layouts/Providers/Providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
