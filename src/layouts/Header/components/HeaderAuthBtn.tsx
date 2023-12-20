"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import Button from "@/components/Button";
import { LogoutIcon, UserIcon } from "@/components/Icons";

export function HeaderAuthBtn() {
  const { data } = useSession();

  function authOnClick() {
    if (!data) {
      void signIn();
    } else {
      void signOut();
    }
  }

  return (
    <Button onClick={authOnClick}>
      {data ? <LogoutIcon /> : <UserIcon />}
    </Button>
  );
}
