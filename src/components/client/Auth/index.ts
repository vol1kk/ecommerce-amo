export { default as Auth } from "@/components/client/Auth/components/Auth";
export { getFormCredentials } from "@/components/client/Auth/utils/getFormCredentials";
export { AvailableOAuthProviders } from "@/components/client/Auth/constants/AvailableOAuthProviders";
export {
  type AuthError,
  useCredentialsLogin,
} from "@/components/client/Auth/hooks/useCredentialsLogin";

export type {
  Credentials,
  RegisterResponse,
  CredentialsError,
  RegisterErrorResponse,
  RegisterSuccessResponse,
} from "@/components/client/Auth/types";
