import Link from "@/components/common/Link";
import { Auth } from "@/components/client/Auth";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

export default function Page() {
  const t = useTranslations("General");
  const messages = useMessages();

  return (
    <Auth>
      <Auth.Image src="/slides/slide-signin.jpg" alt="Sign In" />
      <Auth.Options>
        <Auth.OAuthLogin />
        <NextIntlClientProvider messages={messages}>
          <Auth.CredentialsLogin />
        </NextIntlClientProvider>
        <Link
          href="/register"
          className="mt-4 rounded-md bg-accent py-3 text-center font-bold"
        >
          {t("register")}
        </Link>
      </Auth.Options>
    </Auth>
  );
}
