"use client";

import { FormEvent, useState } from "react";

import Button from "@/components/common/Button";
import { CredentialsError } from "@/components/Auth/types";
import { HideIcon, ShowIcon } from "@/components/common/Icons";
import cn from "@/utils/cn";

const labelClasses = "mb-2 font-bold uppercase tracking-wide";

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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className="[&>label>input]:w-full [&>label]:mb-3 [&>label]:inline-block [&>label]:w-full"
    >
      <label htmlFor="email">
        <span className={labelClasses}>Email</span>
        <input
          required
          id="email"
          name="email"
          type="text"
          placeholder="me@example.com"
          className={cn(
            "w-full rounded-md border-2 border-black px-4 py-2",
            error.email && "border-red-500",
          )}
        />
      </label>
      <label htmlFor="password">
        <div className="flex justify-between">
          <span className={labelClasses}>Password</span>
          <Button
            onClick={() => setShowPassword(prev => !prev)}
            className="flex items-center gap-2 bg-transparent p-0 text-sm font-bold tracking-widest text-lightColor"
          >
            {showPassword ? (
              <>
                <HideIcon />
                Hide
              </>
            ) : (
              <>
                <ShowIcon />
                Show
              </>
            )}
          </Button>
        </div>
        <input
          required
          id="password"
          name="password"
          placeholder="*****"
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
        Sign {type === "login" ? "in" : "up"}
      </Button>
    </form>
  );
}
