"use client";

import { useCredentialsLogin } from "@/components/client/Auth";
import CredentialsForm from "@/components/client/Auth/components/Credentials/CredentialsForm";

export function CredentialsLogin() {
  const { error, setError, handleLogin } = useCredentialsLogin();

  return (
    <CredentialsForm
      type="login"
      error={error}
      setError={setError}
      handleSubmit={handleLogin}
    />
  );
}
