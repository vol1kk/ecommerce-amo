import { ReactNode } from "react";
import { AuthImage } from "@/components/client/Auth/components/AuthImage";
import { AuthOptions } from "@/components/client/Auth/components/AuthOptions";
import { OAuthLogin } from "@/components/client/Auth/components/OAuth/OAuthLogin";
import { CredentialsLogin } from "@/components/client/Auth/components/Credentials/CredentialsLogin";
import { CredentialsRegister } from "@/components/client/Auth/components/Credentials/CredentialsRegister";

type AuthProps = {
  children: ReactNode;
};

export default function Auth({ children }: AuthProps) {
  return (
    <main className="grid h-full grid-cols-2 gap-4 lg:grid-cols-1">
      {children}
    </main>
  );
}

Auth.Image = AuthImage;
Auth.OAuthLogin = OAuthLogin;
Auth.Options = AuthOptions;
Auth.CredentialsLogin = CredentialsLogin;
Auth.CredentialsRegister = CredentialsRegister;
