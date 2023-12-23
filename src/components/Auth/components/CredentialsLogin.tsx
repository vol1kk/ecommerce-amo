"use client";

import { CredentialsForm, useLogin } from "@/components/Auth";

export default function CredentialsLogin() {
  const { error, handleLogin } = useLogin();

  return (
    <CredentialsForm type="login" handleSubmit={handleLogin} error={error} />
  );
}
