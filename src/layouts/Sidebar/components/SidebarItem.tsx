"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import Link from "@/components/common/Link";
import { ITEM_PAGE } from "@/constants/routes";
import { useSearchParams } from "next/navigation";

type SidebarItemProps = {
  name: string;
  href: string;
  icon: ReactNode;
};

export default function SidebarItem({ name, href, icon }: SidebarItemProps) {
  const t = useTranslations("Home");

  const category = useSearchParams().get("category");

  const isShop = category === null && href === ITEM_PAGE;
  const isSelected = name === category;

  return (
    <li
      key={name}
      className={cn(
        "group relative origin-center rounded-md bg-accent px-4 py-2 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-boldColor after:transition-transform after:duration-200 hover:text-boldColor hover:after:scale-100",
        (isSelected || isShop) && "font-semibold text-boldColor",
        isShop && "[&_svg>path]:stroke-boldColor",
        isSelected && "[&_svg]:fill-boldColor",
      )}
    >
      <Link href={href} className="flex items-center gap-2">
        {icon}
        {t(name)}
      </Link>
    </li>
  );
}
