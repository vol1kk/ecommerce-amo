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
  const isPathShop = pathname === "/shop";
  const pathCategory = isPathShop ? "shop" : pathname.slice(6).toLowerCase();

  return (
    <nav>
      <ul
        className={cn(
          "flex flex-col gap-4 text-xl text-lightColor md:flex-row md:flex-wrap md:justify-center",
          className,
        )}
      >
        {NavbarCategories.map(category => {
          const isSelected = category.name.toLowerCase() === pathCategory;
          return (
            <li
              key={category.name}
              className={cn(
                "group relative origin-center rounded-md bg-accent px-4 py-2 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-boldColor after:transition-transform after:duration-200 hover:text-boldColor hover:after:scale-100",
                isSelected && "font-semibold text-boldColor",
                isPathShop && isSelected && "[&_svg>path]:stroke-boldColor",
                !isPathShop && isSelected && "[&_svg]:fill-boldColor",
              )}
            >
              <Link href={category.href} className="flex items-center gap-2">
                {getNavbarIcon(category.icon)} {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
