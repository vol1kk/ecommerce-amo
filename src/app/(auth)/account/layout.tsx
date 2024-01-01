import React, { ReactNode } from "react";

import { LogoutIcon } from "@/components/common/Icons";
import ActiveLink from "@/components/common/ActiveLink";
import SidebarLogout from "@/components/Account/components/SidebarLogout";
import { AccountCategories } from "@/components/Account/constants/AccountCategories";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="grid h-full grid-cols-[1fr,_4fr] gap-4 px-12 py-3 lg:grid-cols-1 [&>section]:py-1">
      <aside>
        <nav className="">
          <ul className="flex flex-col gap-4 text-lg font-semibold text-lightColor lg:flex-row lg:flex-wrap lg:justify-center [&>li]:flex [&>li]:w-[250px] [&>li]:items-center [&>li]:gap-4">
            {AccountCategories.map(category => (
              <li key={category.href}>
                <ActiveLink
                  href={category.href}
                  className="relative flex w-full items-center gap-4 rounded-r-md p-2 px-3"
                  classNameActive="bg-accent before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-purple-700"
                >
                  {category.icon}
                  {category.name}
                </ActiveLink>
              </li>
            ))}
            <li className="text-color justify-center text-base text-red-500 lg:justify-start lg:px-3 [&_svg>path]:fill-red-500">
              <LogoutIcon width={16} />
              <SidebarLogout />
            </li>
          </ul>
        </nav>
      </aside>
      {children}
    </main>
  );
}
