"use client";

import { FormEvent } from "react";

import CredentialsForm from "@/components/client/Auth/components/Credentials/CredentialsForm";
import {
  useCredentialsLogin,
  RegisterResponse,
  getFormCredentials,
} from "@/components/client/Auth";

export function CredentialsRegister() {
  const { handleLogin, setError, error } = useCredentialsLogin();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const credentials = getFormCredentials(e.currentTarget);

    if (!credentials.email && !credentials.password) {
      setError({
        email: true,
        password: true,
        text: "Both fields must be filled!",
      });

      return;
    }

    if (!credentials.email) {
      setError({
        password: false,
        email: true,
        text: "E-Mail must be filled!",
      });

      return;
    }

    if (!credentials.password) {
      setError({
        email: false,
        password: true,
        text: "Password must be filled!",
      });

      return;
    }

    const resp = await fetch("/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const registerResult = (await resp.json()) as RegisterResponse;
    if (!registerResult.success) {
      setError(registerResult.error);
      return;
    }

    await handleLogin(e);
  }

  return (
    <CredentialsForm type="register" error={error} handleSubmit={onSubmit} />
  );
}