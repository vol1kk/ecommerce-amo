"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/utils/intlHooks";
import { useSearchParams } from "next/navigation";

import cn from "@/utils/cn";
import Link from "@/components/common/Link";
import { ITEM_PAGE } from "@/constants/routes";
import { SidebarCategories } from "@/layouts/Sidebar";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const t = useTranslations("Home");

  const path = usePathname();
  const queryCategory = useSearchParams().get("category");

  return (
    <nav>
      <ul
        className={cn(
          "flex flex-wrap justify-center gap-4 text-xl text-lightColor",
          className,
        )}
      >
        {SidebarCategories.map(category => {
          const isShop =
            queryCategory === null &&
            category.href === ITEM_PAGE &&
            path === ITEM_PAGE;

          const isSelected = category.name === queryCategory;

          return (
            <li
              key={category.name}
              className={cn(
                "group relative origin-center rounded-md bg-accent px-4 py-2 after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-boldColor after:transition-transform after:duration-200 hover:text-boldColor hover:after:scale-100",
                (isSelected || isShop) && "font-semibold text-boldColor",
                isShop && "[&_svg>path]:stroke-boldColor",
                isSelected && "[&_svg]:fill-boldColor",
              )}
            >
              <Link href={category.href} className="flex items-center gap-2">
                {category.icon}
                {t(category.name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
