import React from "react";
import Link from "next/link";

import Button from "@/components/Button";
import { HeaderBurger } from "@/layouts/Header";
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
        <Link href="/">
          <LogoIcon />
        </Link>
        <search className="relative w-full sm:hidden">
          <label className="w-full">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search for your items"
              className="w-full rounded-md bg-accent px-6 py-3 pl-10 outline-0 placeholder:text-lightColor"
            />
          </label>
        </search>
        <div className="flex gap-4 sm:hidden [&_button]:px-3">
          <Button className="group">
            <HeartIcon className="fill-transparent transition-[fill] group-hover:fill-red-500 [&>path]:transition-[stroke] group-hover:[&>path]:stroke-red-500" />
          </Button>
          <Button>
            <UserIcon />
          </Button>
          <Button>
            <CartIcon />
          </Button>
        </div>
        <HeaderBurger />
      </div>
    </header>
  );
}
