"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import Button from "@/components/common/Button";
import { CredentialsError } from "@/components/client/Auth/types";
import { HideIcon, ShowIcon } from "@/components/common/Icons";

const labelClasses = "inline-block mb-2 font-bold uppercase tracking-wide";

type CredentialsFormProps = {
  type: "login" | "register";
  error: CredentialsError;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function CredentialsForm({
  type,
  error,
  handleSubmit,
}: CredentialsFormProps) {
  const t = useTranslations("Account");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className="[&>label>input]:w-full [&>label]:mb-3 [&>label]:inline-block [&>label]:w-full"
    >
      <label htmlFor="email">
        <span className={labelClasses}>{t("your_email")}</span>
        <input
          required
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          placeholder="me@example.com"
          className={cn(
            "w-full rounded-md border-2 border-black px-4 py-2",
            error.email && "border-red-500",
          )}
        />
      </label>
      <label htmlFor="password">
        <div className="flex items-center justify-between">
          <span className={labelClasses}>{t("your_password")}</span>
          <Button
            onClick={() => setShowPassword(prev => !prev)}
            className="flex items-center gap-2 bg-transparent p-0 text-sm font-bold tracking-widest text-lightColor"
          >
            {showPassword ? (
              <>
                <HideIcon />
                {t("hide")}
              </>
            ) : (
              <>
                <ShowIcon />
                {t("show")}
              </>
            )}
          </Button>
        </div>
        <input
          required
          id="password"
          name="password"
          placeholder="*****"
          autoComplete="password"
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full rounded-md border-2 border-black px-4 py-2",
            error.password && "border-red-500",
          )}
        />
      </label>
      {error.text && (
        <div className="text-bold w-full text-center text-red-500">
          {error.text}
        </div>
      )}
      <Button isSubmit={true} className="mt-2 w-full text-lg font-bold">
        {type === "login" ? t("sign_in") : t("sign_up")}
      </Button>
    </form>
  );
}
