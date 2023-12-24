import { ReactNode } from "react";
import { AuthImage } from "@/components/Auth/components/AuthImage";
import { AuthOptions } from "@/components/Auth/components/AuthOptions";
import { OAuthLogin } from "@/components/Auth/components/OAuth/OAuthLogin";
import { CredentialsLogin } from "@/components/Auth/components/Credentials/CredentialsLogin";
import { CredentialsRegister } from "@/components/Auth/components/Credentials/CredentialsRegister";

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
