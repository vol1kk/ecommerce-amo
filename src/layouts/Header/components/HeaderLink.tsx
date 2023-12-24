"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import cn from "@/utils/cn";
import Link from "@/components/common/Link";

type HeaderLinkProps = {
  href: string;
  icon: ReactNode;
  className?: string;
};

export function HeaderLink({ icon, href, className }: HeaderLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center rounded-md bg-accent px-4 py-3",
        path === href && "bg-purple-700 [&>svg_path]:stroke-purple-300",
        className,
      )}
    >
      {icon}
    </Link>
  );
}
