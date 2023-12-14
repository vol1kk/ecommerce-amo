"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import cn from "@/utils/cn";
import { NavbarCategories } from "@/layouts/Header/constants/NavbarCategories";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-6 text-xl text-lightColor ">
        {NavbarCategories.map(category => (
          <li
            key={category.name}
            className={cn(
              "relative origin-center after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-boldColor after:transition-transform after:duration-200 hover:after:scale-100",
              category.name.toLowerCase() === pathname.slice(1).toLowerCase() &&
                "font-bold text-boldColor",
            )}
          >
            <Link href={category.href}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
