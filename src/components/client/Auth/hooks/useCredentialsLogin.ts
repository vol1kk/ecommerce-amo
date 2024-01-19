"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { HOME_PAGE } from "@/constants/routes";
import { getFormCredentials } from "@/components/client/Auth";

export type AuthError = {
  email?: string;
  password?: string;
  general?: string;
} | null;

export function useCredentialsLogin() {
  const router = useRouter();
  const [error, setError] = useState<AuthError>(null);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const credentials = getFormCredentials(form);

    const result = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });

    if (result?.ok) {
      router.push(HOME_PAGE);
    } else {
      form.reset();
      (form.querySelector(":focus") as HTMLInputElement).blur();

      setError({
        general: "something_wrong",
      });
    }
  }

  return { error, setError, handleLogin };
}
