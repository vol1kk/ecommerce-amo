"use client";

import React, { ReactNode } from "react";
import { signOut } from "next-auth/react";

import { LogoutIcon } from "@/components/common/Icons";
import removeCookieAction from "@/utils/removeCookieAction";

type AuthSignOutProps = {
  name: string;
  showIcon?: boolean;
  className?: string;
};

export function AuthSignOut({
  name,
  className,
  showIcon = true,
}: AuthSignOutProps) {
  return (
    <button
      className={className}
      type="button"
      onClick={async () => {
        signOut().then(() => removeCookieAction("refreshToken"));
      }}
    >
      {showIcon && <LogoutIcon width={16} />}
      <span>{name}</span>
    </button>
  );
}
