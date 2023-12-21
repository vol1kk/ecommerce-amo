"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import Button from "@/components/common/Button";
import { HideIcon } from "@/components/common/Icons";

const labelClasses = "mb-2 font-bold uppercase tracking-wide";

export default function CredentialsLogin() {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      login: formData.get("login"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      (e.target as HTMLFormElement).reset();
      setIsError(true);
    }
  }

  return (
    <form
      onSubmit={onFormSubmit}
      className="[&>label>input]:w-full [&>label]:mb-3 [&>label]:inline-block [&>label]:w-full"
    >
      <label htmlFor="login">
        <span className={labelClasses}>Login</span>
        <input
          id="login"
          name="login"
          type="text"
          placeholder="Login"
          className="w-full rounded-md border-2 border-black px-4 py-2"
        />
      </label>
      <label htmlFor="password">
        <div className="flex justify-between">
          <span className={labelClasses}>Password</span>
          <Button
            onClick={() => setShowPassword(prev => !prev)}
            className="flex items-center gap-2 bg-transparent p-0 text-sm font-bold tracking-widest text-lightColor"
          >
            <HideIcon />
            Hide
          </Button>
        </div>
        <input
          id="password"
          name="password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          className="rounded-md border-2 border-black px-4 py-2"
        />
      </label>
      {isError && (
        <div className="text-bold w-full text-center text-red-500">
          Invalid credentials! Please try again.
        </div>
      )}
      <Button isSubmit={true} className="mt-2 w-full text-lg font-bold">
        Sign in
      </Button>
    </form>
  );
}
