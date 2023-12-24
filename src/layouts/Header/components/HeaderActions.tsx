import React from "react";

import { HeaderLink } from "@/layouts/Header";
import { CartIcon, HeartIcon, UserIcon } from "@/components/common/Icons";

type HeaderActionsProps = {
  className?: string;
};

export function HeaderActions({ className }: HeaderActionsProps) {
  return (
    <div className={className}>
      <HeaderLink icon={<HeartIcon />} href="/account/wishlist" />
      <HeaderLink icon={<UserIcon />} href="/account" />
      <HeaderLink icon={<CartIcon />} href="/account/orders" />
    </div>
  );
}
