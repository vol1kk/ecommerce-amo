import "@/app/globals.css";

import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import { Sidebar } from "@/layouts/Sidebar";

export default function Layout(props: { children: ReactNode }) {
  const t = useTranslations("General");

  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col">
        <aside className="p-2 pb-4 pl-4 sm:hidden">
          <h2 className="mb-2  text-center text-lg font-bold text-boldColor">
            {t("categories")}
          </h2>
          <Sidebar />
        </aside>
        {props.children}
      </div>
      <Footer />
    </>
  );
}
