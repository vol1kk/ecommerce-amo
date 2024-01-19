import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import Button from "@/components/common/Button";
import { AuthError } from "@/components/client/Auth";
import { HideIcon, ShowIcon } from "@/components/common/Icons";

const errorClasses = "text-bold mt-1 w-full text-center text-red-500";
const labelClasses = "inline-block mb-2 font-bold uppercase tracking-wide";

type CredentialsFormProps = {
  error: AuthError;
  type: "login" | "register";
  setError: Dispatch<SetStateAction<AuthError>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function CredentialsForm({
  type,
  error,
  setError,
  handleSubmit,
}: CredentialsFormProps) {
  const t = useTranslations("Forms");
  const tg = useTranslations("General");
  const te = useTranslations("Errors") as (value: any) => string;

  const [showPassword, setShowPassword] = useState(false);

  function handleErrorReset(e: ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;

    setError(prev => ({ ...prev, general: "", [name]: "" }));
  }

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className="[&>label>input]:w-full [&>label]:mb-2 [&>label]:inline-block [&>label]:w-full"
    >
      <label htmlFor="email">
        <span className={labelClasses}>{t("prefixed.email")}</span>
        <input
          required
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          placeholder="me@example.com"
          onChange={handleErrorReset}
          className={cn(
            "w-full rounded-md border-2 border-black px-4 py-2",
            (error?.email || error?.general) && "border-red-500",
          )}
        />
        {error?.email && <div className={errorClasses}>{te(error.email)}</div>}
      </label>
      <label htmlFor="password">
        <div className="flex items-center justify-between">
          <span className={labelClasses}>{t("prefixed.password")}</span>
          <Button
            onClick={() => setShowPassword(prev => !prev)}
            className="flex items-center gap-2 bg-transparent p-0 text-sm font-bold tracking-widest text-lightColor"
          >
            {showPassword ? (
              <>
                <HideIcon />
                {tg("hide")}
              </>
            ) : (
              <>
                <ShowIcon />
                {tg("show")}
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
          onChange={handleErrorReset}
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full rounded-md border-2 border-black px-4 py-2",
            (error?.password || error?.general) && "border-red-500",
          )}
        />
        {error?.password && (
          <div className={errorClasses}>{te(error.password)}</div>
        )}
        {error?.general && (
          <div className={errorClasses}>{te(error.general)}</div>
        )}
      </label>
      <Button isSubmit className="mt-2 w-full text-lg font-bold">
        {type === "login" ? tg("login") : tg("register")}
      </Button>
    </form>
  );
}
