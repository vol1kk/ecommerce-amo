"use client";

import { useCredentialsLogin } from "@/components/client/Auth";
import CredentialsForm from "@/components/client/Auth/components/Credentials/CredentialsForm";

export function CredentialsLogin() {
  const { error, handleLogin } = useCredentialsLogin();

  return (
    <CredentialsForm type="login" handleSubmit={handleLogin} error={error} />
  );
}
