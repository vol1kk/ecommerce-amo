"use client";

import { Session } from "next-auth";

import { Details } from "@/components/UserDetails";

type AccountDetailsProps = {
  user: Session["user"];
};

export default function AccountDetails({ user }: AccountDetailsProps) {
  return (
    <>
      <Details.Name firstName={user.name || ""} lastName={user.surname || ""} />
      <Details.Email initialEmail={user.email || ""} />
      <Details.Phone number={user.phone || ""} />
      <Details.Password />
    </>
  );
}
