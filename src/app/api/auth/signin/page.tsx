"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import GitHubIcon from "@/components/Icons/GitHubIcon";

export default function Page() {
  function credentialsLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    void signIn("credentials", {
      login: formData.get("login"),
      password: formData.get("password"),
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <main className="flex-1">
      <Section>
        <Button
          className="flex items-center justify-between gap-2 px-8 py-3"
          onClick={() =>
            void signIn("github", {
              redirect: true,
              callbackUrl: "/",
            })
          }
        >
          <GitHubIcon />
          <span className="text-lg font-bold">GitHub</span>
        </Button>
      </Section>
      <Section>
        <form
          className="grid place-content-center [&>label]:mb-2"
          onSubmit={credentialsLogin}
        >
          <label htmlFor="login">
            <span className="mb-2 block text-center font-bold uppercase tracking-wide">
              Login
            </span>
            <input
              id="login"
              name="login"
              type="text"
              placeholder="Login"
              className="rounded-md border-2 border-black px-4 py-2"
            />
          </label>
          <label htmlFor="password">
            <span className="mb-2 block text-center font-bold uppercase tracking-wide">
              Password
            </span>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="rounded-md border-2 border-black px-4 py-2"
            />
          </label>
          <Button isSubmit={true} className="text-lg font-bold">
            Sign in
          </Button>
        </form>
      </Section>
    </main>
  );
}
