import { AvailableOAuthProviders } from "@/components/client/Auth";
import OAuthForm from "@/components/client/Auth/components/OAuth/OAuthForm";
import { useTranslations } from "next-intl";

export function OAuthLogin() {
  const t = useTranslations("Account");

  return (
    <div>
      {AvailableOAuthProviders.length > 0 && (
        <div className="grid gap-3">
          {AvailableOAuthProviders.map(provider => (
            <OAuthForm
              key={provider.name}
              tl={t("oauth_continue")}
              provider={provider}
            />
          ))}
        </div>
      )}
      <div className="relative inset-x-0 my-8 h-[2px] rounded-md bg-[#666] bg-opacity-25 uppercase">
        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-6 py-1 font-bold text-[#666]">
          {t("or")}
        </span>
      </div>
    </div>
  );
}
