"use client";

import { useSession } from "next-auth/react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { DetailsName } from "@/components/UserDetails/components/DetailsName";
import { DetailsEmail } from "@/components/UserDetails/components/DetailsEmail";
import { DetailsPhone } from "@/components/UserDetails/components/DetailsPhone";
import DetailsValue from "@/components/UserDetails/components/common/DetailsValue";
import { DetailsPassword } from "@/components/UserDetails/components/DetailsPassword";

export default function Details({
  children,
}: {
  children: (
    isEditing: boolean,
    setIsEditing: Dispatch<SetStateAction<boolean>>,
    update: ReturnType<typeof useSession>["update"],
  ) => ReactNode;
}) {
  const { update } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="relative mb-6 after:absolute after:inset-x-0 after:-bottom-3 after:h-[2px] after:rounded-md after:bg-accent">
      {children(isEditing, setIsEditing, update)}
    </div>
  );
}

Details.Value = DetailsValue;
Details.Name = DetailsName;
Details.Email = DetailsEmail;
Details.Phone = DetailsPhone;
Details.Password = DetailsPassword;
