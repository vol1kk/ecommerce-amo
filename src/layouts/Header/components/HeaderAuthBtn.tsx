"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Button from "@/components/common/Button";
import { UserIcon } from "@/components/common/Icons";
import { ACCOUNT_PAGE, SIGN_IN_PAGE } from "@/constants/routes";
import { SpinnerIcon } from "@/components/common/Icons/SpinnerIcon";

export function HeaderAuthBtn() {
  const router = useRouter();

  const { data, status } = useSession();

  function handleAuthentication() {
    if (!data) {
      router.push(SIGN_IN_PAGE);
    } else {
      router.push(ACCOUNT_PAGE);
    }
  }

  return (
    <Button onClick={handleAuthentication}>
      {status === "loading" ? (
        <SpinnerIcon
          width={20}
          className="animate-spin fill-purple-700 text-lightColor"
        />
      ) : (
        <UserIcon />
      )}
    </Button>
  );
}
