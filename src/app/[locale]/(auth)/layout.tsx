import React from "react";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
