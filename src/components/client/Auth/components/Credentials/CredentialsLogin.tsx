"use client";

import { useLogin } from "@/components/client/Auth";
import CredentialsForm from "@/components/client/Auth/components/Credentials/CredentialsForm";

export function CredentialsLogin() {
  const { error, handleLogin } = useLogin();

  return (
    <CredentialsForm type="login" handleSubmit={handleLogin} error={error} />
  );
}
