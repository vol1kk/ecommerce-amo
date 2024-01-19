"use client";

import { FormEvent } from "react";

import getZodErrors from "@/utils/getZodErrors";
import { AuthService } from "@/services/AuthService";
import CredentialsForm from "@/components/client/Auth/components/Credentials/CredentialsForm";
import {
  useCredentialsLogin,
  getFormCredentials,
} from "@/components/client/Auth";

export function CredentialsRegister() {
  const { handleLogin, setError, error } = useCredentialsLogin();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const credentials = getFormCredentials(e.currentTarget);

    const res = await AuthService.register(credentials);

    // If user with this email already exists
    if ("statusCode" in res && res.statusCode === 409) {
      setError({
        email: "email_exists",
      });

      return;
    }

    // If passed body was invalid
    const errors = getZodErrors(res.errors);
    if (errors) {
      setError(errors);
      return;
    }

    await handleLogin(e);
  }

  return (
    <CredentialsForm
      type="register"
      error={error}
      setError={setError}
      handleSubmit={onSubmit}
    />
  );
}
