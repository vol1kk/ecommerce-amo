export { useLogin } from "@/components/client/Auth/hooks/useLogin";
export { getOAuthIcon } from "@/components/client/Auth/utils/getOAuthIcon";
export { default as Auth } from "@/components/client/Auth/components/Auth";
export { getFormCredentials } from "@/components/client/Auth/utils/getFormCredentials";
export { AvailableOAuthProviders } from "@/components/client/Auth/constants/AvailableOAuthProviders";

export type {
  RegisterResponse,
  CredentialsError,
  Credentials,
  RegisterErrorResponse,
  RegisterSuccessResponse,
  AvailableProviders as TAvailableProviders,
} from "@/components/client/Auth/types";
