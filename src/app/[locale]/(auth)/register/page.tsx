import { Auth } from "@/components/client/Auth";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Page() {
  const messages = useMessages();

  return (
    <Auth>
      <Auth.Image src="/slides/slide-register.jpg" alt="Sign Up" />
      <Auth.Options>
        <NextIntlClientProvider messages={messages}>
          <Auth.CredentialsRegister />
        </NextIntlClientProvider>
      </Auth.Options>
    </Auth>
  );
}
