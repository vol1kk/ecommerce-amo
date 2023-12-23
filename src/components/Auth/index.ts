export { useLogin } from "@/components/Auth/hooks/useLogin";
export { getOAuthIcon } from "@/components/Auth/utils/getOAuthIcon";
export { getFormCredentials } from "@/components/Auth/utils/getFormCredentials";
export { default as OAuthLogin } from "@/components/Auth/components/OAuthLogin";
export { default as CredentialsForm } from "@/components/Auth/components/CredentialsForm";
export { default as CredentialsLogin } from "@/components/Auth/components/CredentialsLogin";
export { AvailableOAuthProviders } from "@/components/Auth/constants/AvailableOAuthProviders";
export { default as CredentialsRegister } from "@/components/Auth/components/CredentialsRegister";

export type {
  RegisterResponse,
  CredentialsError,
  RegisterCredentials,
  RegisterErrorResponse,
  RegisterSuccessResponse,
  AvailableProviders as TAvailableProviders,
} from "@/components/Auth/types";
