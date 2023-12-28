"use client";

import { signIn } from "next-auth/react";

import Button from "@/components/common/Button";
import { getOAuthIcon, TAvailableProviders } from "@/components/Auth";

type OAUthLoginProps = {
  name: TAvailableProviders;
};

export default function OAuthForm({ name }: OAUthLoginProps) {
  return (
    <Button
      onClick={() =>
        signIn(name.toLowerCase(), { redirect: true, callbackUrl: "/" })
      }
      className="relative w-full gap-2 px-8 py-3"
    >
      <span className="flex items-center justify-center gap-4">
        {getOAuthIcon(name.toLowerCase() as Lowercase<TAvailableProviders>)}
        <span className="text-lg font-bold">Continue with {name}</span>
      </span>
    </Button>
  );
}
