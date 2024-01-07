"use client";

import { ReactNode } from "react";

import cn from "@/utils/cn";
import Link from "@/components/common/Link";
import { usePathname } from "@/utils/intlHooks";

type HeaderLinkProps = {
  href: string;
  icon: ReactNode;
  className?: string;
  highlightedHref?: string;
};

export function HeaderLink({
  icon,
  href,
  className,
  highlightedHref,
}: HeaderLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center rounded-md bg-accent px-4 py-3",
        (path === href || path === highlightedHref) &&
          "bg-purple-700 [&>svg_path]:stroke-white",
        className,
      )}
    >
      {icon}
    </Link>
  );
}
