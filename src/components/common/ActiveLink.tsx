"use client";

import cn from "@/utils/cn";
import Link, { CustomLinkProps } from "@/components/common/Link";
import { usePathname } from "@/utils/intlHooks";

type ActiveLinkProps = {
  classNameActive?: string;
} & CustomLinkProps;

export default function ActiveLink({
  children,
  className,
  classNameActive,
  ...props
}: ActiveLinkProps) {
  const path = usePathname();

  return (
    <Link
      className={cn(className, props.href === path && classNameActive)}
      {...props}
    >
      {children}
    </Link>
  );
}
