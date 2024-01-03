import React, { ReactNode } from "react";

import { Auth } from "@/components/client/Auth";
import ActiveLink from "@/components/common/ActiveLink";
import { HeartIcon, OrdersIcon, UserIcon } from "@/components/common/Icons";
import { ACCOUNT_PAGE, ORDERS_PAGE, WISHLIST_PAGE } from "@/constants/routes";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="grid flex-1 grid-cols-[1fr,_4fr] gap-4 px-12 py-3 lg:grid-cols-1 [&>section]:py-1">
      <aside>
        <nav>
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
              <Auth.SignOut className="flex items-center gap-4" />
            </li>
          </ul>
        </nav>
      </aside>
      {children}
    </main>
  );
}

const AccountCategories = [
  {
    name: "My Info",
    href: ACCOUNT_PAGE,
    icon: <UserIcon />,
  },
  {
    name: "Orders",
    href: ORDERS_PAGE,
    icon: <OrdersIcon />,
  },
  {
    name: "Wishlist",
    href: WISHLIST_PAGE,
    icon: <HeartIcon />,
  },
] as const;
