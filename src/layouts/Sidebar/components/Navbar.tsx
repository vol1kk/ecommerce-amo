"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import cn from "@/utils/cn";
import { getNavbarIcon, NavbarCategories } from "@/layouts/Sidebar";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav>
      <ul
        className={cn(
          "flex flex-col gap-4 text-xl text-lightColor md:flex-row md:flex-wrap md:justify-center",
          className,
        )}
      >
        {NavbarCategories.map(category => (
          <li
            key={category.name}
            className={cn(
              "group relative origin-center rounded-md bg-accent px-4 py-2 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-boldColor after:transition-transform after:duration-200 hover:text-boldColor hover:after:scale-100",
              category.name.toLowerCase() === pathname.slice(1).toLowerCase() &&
                "bg-accent [&_svg]:fill-red-500",
            )}
          >
            <Link href={category.href} className="flex items-center gap-2">
              {getNavbarIcon(category.icon)} {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
