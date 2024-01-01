import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

export type CustomLinkProps = {
  children: ReactNode;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ href, children, ...props }: CustomLinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
