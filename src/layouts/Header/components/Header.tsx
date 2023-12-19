import React from "react";
import Link from "next/link";

import Button from "@/components/Button";
import { HeaderActions, HeaderBurger, HeaderSearch } from "@/layouts/Header";
import {
  CartIcon,
  HeartIcon,
  LogoIcon,
  SearchIcon,
  UserIcon,
} from "@/components/Icons";

export default function Header() {
  return (
    <header className=" border-b-[1px] border-b-[#BEBCBD]">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-4 py-2 sm:justify-center">
        <Link className="relative z-50" href="/">
          <LogoIcon />
        </Link>
        <HeaderSearch className="sm:hidden" />
        <HeaderActions className="flex gap-4 sm:hidden" />
        <HeaderBurger />
      </div>
    </header>
  );
}
