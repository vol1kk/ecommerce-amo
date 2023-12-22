"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import Button from "@/components/common/Button";
import { LogoutIcon, UserIcon } from "@/components/common/Icons";

export function HeaderAuthBtn() {
  const { data } = useSession();
  console.log(data);

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
