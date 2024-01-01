"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { HOME_PAGE } from "@/constants/routes";
import { getFormCredentials } from "@/components/client/Auth";

const initialError = {
  text: "",
  email: false,
  password: false,
};

export function useLogin() {
  const router = useRouter();
  const [error, setError] = useState(initialError);

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
      setError(prev => ({
        ...prev,
        text: "Invalid credentials! Please try again.",
      }));
    }
  }

  return { error, setError, handleLogin };
}
