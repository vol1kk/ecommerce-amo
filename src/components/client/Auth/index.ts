export { default as Auth } from "@/components/client/Auth/components/Auth";
export { getFormCredentials } from "@/components/client/Auth/utils/getFormCredentials";
export { useCredentialsLogin } from "@/components/client/Auth/hooks/useCredentialsLogin";
export { AvailableOAuthProviders } from "@/components/client/Auth/constants/AvailableOAuthProviders";

export type {
  RegisterResponse,
  CredentialsError,
  Credentials,
  RegisterErrorResponse,
  RegisterSuccessResponse,
} from "@/components/client/Auth/types";
