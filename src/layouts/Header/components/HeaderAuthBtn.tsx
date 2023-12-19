"use client";

import React from "react";

import Button from "@/components/Button";
import { UserIcon } from "@/components/Icons";
import { signIn, signOut, useSession } from "next-auth/react";

export default function HeaderAuthBtn() {
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
      <UserIcon />
    </Button>
  );
}
