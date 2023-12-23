"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { getFormCredentials } from "@/components/Auth";

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
      router.push("/");
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