export { useLogin } from "@/components/Auth/hooks/useLogin";
export { getOAuthIcon } from "@/components/Auth/utils/getOAuthIcon";
export { default as Auth } from "@/components/Auth/components/Auth";
export { getFormCredentials } from "@/components/Auth/utils/getFormCredentials";
export { AvailableOAuthProviders } from "@/components/Auth/constants/AvailableOAuthProviders";

export type {
  RegisterResponse,
  CredentialsError,
  Credentials,
  RegisterErrorResponse,
  RegisterSuccessResponse,
  AvailableProviders as TAvailableProviders,
} from "@/components/Auth/types";
