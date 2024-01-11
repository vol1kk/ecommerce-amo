"use client";

import { FormEvent } from "react";

import CredentialsForm from "@/components/client/Auth/components/Credentials/CredentialsForm";
import {
  useCredentialsLogin,
  RegisterResponse,
  getFormCredentials,
} from "@/components/client/Auth";
import { httpService } from "@/services/RequestService";
import { useSession } from "next-auth/react";

export function CredentialsRegister() {
  const { data } = useSession();
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

    // TODO: errors from server?
    await httpService.post("/auth/register", {
      headers: {
        authorization: `Bearer ${data?.user.accessToken}`,
      },
      body: credentials,
    });

    await handleLogin(e);
  }

  return (
    <CredentialsForm type="register" error={error} handleSubmit={onSubmit} />
  );
}
