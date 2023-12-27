"use client";

import { useSession } from "next-auth/react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { DetailsName } from "@/components/UserDetails/components/DetailsName";
import { DetailsEmail } from "@/components/UserDetails/components/DetailsEmail";
import { DetailsNumber } from "@/components/UserDetails/components/DetailsNumber";
import { DetailsPassword } from "@/components/UserDetails/components/DetailsPassword";
import DetailsValueView from "@/components/UserDetails/components/common/DetailsValueView";

export default function Details({
  children,
}: {
  children: (
    isEditing: boolean,
    setIsEditing: Dispatch<SetStateAction<boolean>>,
    update: ReturnType<typeof useSession>["update"],
  ) => ReactNode;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { update } = useSession();

  return (
    <div className="relative mb-6 after:absolute after:inset-x-0 after:-bottom-3 after:h-[2px] after:rounded-md after:bg-accent">
      {children(isEditing, setIsEditing, update)}
    </div>
  );
}

Details.Value = DetailsValueView;
Details.Name = DetailsName;
Details.Email = DetailsEmail;
Details.Phone = DetailsNumber;
Details.Password = DetailsPassword;
