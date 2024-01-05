import { ComponentProps, ReactNode } from "react";

import { Link as IntlLink } from "@/utils/intlHooks";

export type CustomLinkProps = {
  children: ReactNode;
} & ComponentProps<typeof IntlLink>;

export default function Link2({ href, children, ...props }: CustomLinkProps) {
  return (
    <IntlLink href={href} {...props}>
      {children}
    </IntlLink>
  );
}
