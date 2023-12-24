"use client";

import { useLogin } from "@/components/Auth";
import CredentialsForm from "@/components/Auth/components/Credentials/CredentialsForm";

export function CredentialsLogin() {
  const { error, handleLogin } = useLogin();

  return (
    <CredentialsForm type="login" handleSubmit={handleLogin} error={error} />
  );
}
