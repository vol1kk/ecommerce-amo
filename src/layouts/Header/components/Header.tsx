import React from "react";
import Link from "next/link";

import { Button } from "@/components/Button";
import {
  CartIcon,
  HeartIcon,
  LogoIcon,
  SearchIcon,
  UserIcon,
} from "@/components/Icons";
import Navbar from "@/layouts/Header/components/Navbar";

export default function Header() {
  return (
    <header className="border-b-[1px] border-b-[#BEBCBD]">
      <div className="mx-auto flex max-w-screen-xl items-center gap-10 px-4 py-2">
        <Link href="/">
          <LogoIcon />
        </Link>
        <div className="flex flex-1 items-center justify-between md-header:hidden">
          <Navbar />
          <div className="flex items-center justify-between gap-4">
            <search>
              <label className="relative rounded-md bg-accent px-2 py-3 pl-10 outline-2 outline-offset-2 outline-black focus-within:outline">
                <SearchIcon className="absolute top-1/2 ml-3 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-accent outline-0 placeholder:text-lightColor lg:w-0"
                />
              </label>
            </search>
            <div className="flex gap-4 [&_button]:px-3">
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
          </div>
        </div>
      </div>
    </header>
  );
}
