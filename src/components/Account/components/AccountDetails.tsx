"use client";

import { Session } from "next-auth";

import { Details } from "@/components/UserDetails";

type AccountDetailsProps = {
  user: Session["user"];
};

export default function AccountDetails({ user }: AccountDetailsProps) {
  const isEditable = user.provider === "credentials";

  return (
    <>
      <Details.Name
        isEditable
        firstName={user.name || ""}
        lastName={user.surname || ""}
      />
      <Details.Email isEditable={isEditable} initialEmail={user.email || ""} />
      <Details.Phone isEditable number={user.phone || ""} />
      {isEditable && <Details.Password isEditable={isEditable} />}
    </>
  );
}
