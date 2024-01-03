"use client";

import cn from "@/utils/cn";
import Link from "@/components/common/Link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n";

type SidebarItemProps = {
  name: string;
  href: string;
  icon: ReactNode;
};

export default function SidebarItem({ name, href, icon }: SidebarItemProps) {
  const pathname = usePathname();
  const parsedPath = pathname.replace(
    new RegExp(locales.map(l => l + "/").join("|"), "g"),
    "",
  );
  const isPathShop = parsedPath === "/shop";
  const isSelected = href === parsedPath;

  return (
    <li
      key={name}
      className={cn(
        "group relative origin-center rounded-md bg-accent px-4 py-2 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-boldColor after:transition-transform after:duration-200 hover:text-boldColor hover:after:scale-100",
        isSelected && "font-semibold text-boldColor",
        isPathShop && isSelected && "[&_svg>path]:stroke-boldColor",
        !isPathShop && isSelected && "[&_svg]:fill-boldColor",
      )}
    >
      <Link href={href} className="flex items-center gap-2">
        {icon}
        {name}
      </Link>
    </li>
  );
}
