import React from "react";

import cn from "@/utils/cn";
import { SidebarCategories } from "@/layouts/Sidebar";
import SidebarItem from "@/layouts/Sidebar/components/SidebarItem";

type NavbarProps = {
  t: (str: string) => string;
  className?: string;
};

export default function Sidebar({ t, className }: NavbarProps) {
  return (
    <nav>
      <ul
        className={cn(
          "flex flex-wrap justify-center gap-4 text-xl text-lightColor",
          className,
        )}
      >
        {SidebarCategories.map(category => (
          <SidebarItem
            href={category.href}
            icon={category.icon}
            name={t(category.name.toLowerCase())}
            key={category.name.toLowerCase()}
          />
        ))}
      </ul>
    </nav>
  );
}
