"use client";

import React, { ReactNode } from "react";
import { signOut } from "next-auth/react";

import { LogoutIcon } from "@/components/common/Icons";

type AuthSignOutProps = {
  showIcon?: boolean;
  className?: string;
};

export function AuthSignOut({ showIcon = true, className }: AuthSignOutProps) {
  return (
    <button className={className} type="button" onClick={() => signOut()}>
      {showIcon && <LogoutIcon width={16} />}
      <span>Sign Out</span>
    </button>
  );
}
