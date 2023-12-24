import { AvailableOAuthProviders } from "@/components/Auth";

export type AvailableProviders = (typeof AvailableOAuthProviders)[number];

export type CredentialsError = {
  email: boolean;
  password: boolean;
  text: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type RegisterErrorResponse = {
  success: false;
  error: CredentialsError;
};

export type RegisterSuccessResponse = {
  success: true;
  data: Credentials;
};

export type RegisterResponse = RegisterErrorResponse | RegisterSuccessResponse;
