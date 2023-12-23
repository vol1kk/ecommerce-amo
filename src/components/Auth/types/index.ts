import { AvailableOAuthProviders } from "@/components/Auth";

export type AvailableProviders = (typeof AvailableOAuthProviders)[number];

export type CredentialsError = {
  email: boolean;
  password: boolean;
  text: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
};

export type RegisterErrorResponse = {
  success: false;
  error: CredentialsError;
};

export type RegisterSuccessResponse = {
  success: true;
  data: RegisterCredentials;
};

export type RegisterResponse = RegisterErrorResponse | RegisterSuccessResponse;
