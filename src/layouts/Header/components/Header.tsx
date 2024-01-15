import React from "react";

import Link from "@/components/common/Link";
import { HOME_PAGE } from "@/constants/routes";
import { LogoIcon } from "@/components/common/Icons";
import { HeaderActions, HeaderBurger, HeaderSearch } from "@/layouts/Header";
import { useTranslations } from "next-intl";
import { Sidebar } from "@/layouts/Sidebar";
import SidebarLocale from "@/layouts/Sidebar/components/SidebarLocale";

export default function Header() {
  const t = useTranslations("Home");

  const searchTL = t("search");

  return (
    <header className=" border-b-[1px] border-b-[#BEBCBD]">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-4 py-2 sm:justify-center">
        <Link className="relative z-50" href={HOME_PAGE}>
          <LogoIcon />
        </Link>
        <HeaderSearch placeholder={searchTL} className="sm:hidden" />
        <HeaderActions className="flex gap-4 sm:hidden" />
        <HeaderBurger>
          <Sidebar className="mb-4 !flex-col" />
          <HeaderSearch placeholder={searchTL} className="mb-4" />
          <HeaderActions className="grid gap-2" />
        </HeaderBurger>
        <SidebarLocale />
      </div>
    </header>
  );
}
