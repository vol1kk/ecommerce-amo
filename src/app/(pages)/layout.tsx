import "@/app/globals.css";

import React, { ReactNode } from "react";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Sidebar";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col">
        <aside className="p-2 pb-4 pl-4 sm:hidden">
          <h2 className="mb-2  text-center text-lg font-bold text-boldColor">
            Categories
          </h2>
          <Navbar />
        </aside>
        {props.children}
      </div>
      <Footer />
    </>
  );
}
