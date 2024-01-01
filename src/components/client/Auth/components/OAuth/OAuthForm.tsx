"use client";

import { ReactNode } from "react";
import { signIn } from "next-auth/react";

import Button from "@/components/common/Button";

type OAUthLoginProps = {
  provider: {
    name: string;
    icon: ReactNode;
  };
};

export default function OAuthForm({ provider }: OAUthLoginProps) {
  return (
    <Button
      onClick={() =>
        signIn(provider.name.toLowerCase(), {
          redirect: true,
          callbackUrl: "/",
        })
      }
      className="relative w-full gap-2 px-8 py-3"
    >
      <span className="flex items-center justify-center gap-4">
        {provider.icon}
        <span className="text-lg font-bold">Continue with {provider.name}</span>
      </span>
    </Button>
  );
}
