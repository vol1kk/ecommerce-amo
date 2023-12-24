import React from "react";

import { HeaderLink } from "@/layouts/Header";
import { CartIcon, HeartIcon, UserIcon } from "@/components/common/Icons";
import {
  ACCOUNT_PAGE,
  CART_PAGE,
  ORDERS_PAGE,
  WISHLIST_PAGE,
} from "@/constants/routes";

type HeaderActionsProps = {
  className?: string;
};

export function HeaderActions({ className }: HeaderActionsProps) {
  return (
    <div className={className}>
      <HeaderLink icon={<HeartIcon />} href={WISHLIST_PAGE} />
      <HeaderLink
        icon={<UserIcon />}
        href={ACCOUNT_PAGE}
        highlightedHref={ORDERS_PAGE}
      />
      <HeaderLink icon={<CartIcon />} href={CART_PAGE} />
    </div>
  );
}
