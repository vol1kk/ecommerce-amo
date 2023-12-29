"use client";

import { usePathname } from "next/navigation";
import Link from "@/components/common/Link";
import { ReactNode } from "react";
import cn from "@/utils/cn";

type AccountLinkProps = {
  href: string;
  name: string;
  icon: ReactNode;
};

export function AccountLink({ href, name, icon }: AccountLinkProps) {
  const path = usePathname();

  return (
    <li
      key={href}
      className={cn(
        "relative rounded-r-md px-3",
        path === href &&
          "bg-accent before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-purple-700",
      )}
    >
      <Link href={href} className="flex items-center gap-4">
        {icon}
        <span>{name}</span>
      </Link>
    </li>
  );
}
