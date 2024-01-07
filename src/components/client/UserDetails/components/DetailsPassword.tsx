"use client";

import cn from "@/utils/cn";
import { Details, useDetailsForm } from "@/components/client/UserDetails";

type DetailsPasswordProps = {
  canEdit: boolean;
};

export function DetailsPassword({ canEdit }: DetailsPasswordProps) {
  const { isEditing, setIsEditing, formAction, error } = useDetailsForm("");

  return (
    <Details>
      <Details.View
        value="*****"
        canEdit={canEdit}
        title="Your Password"
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          title="Password"
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              type="password"
              name="currentPass"
              placeholder="Current Passwrod"
              className={cn(error.password?.old && "border-2 border-red-500")}
            />
            {error.password?.old && (
              <span className="text-center font-semibold text-red-500">
                {error.password?.old}
              </span>
            )}
            <Details.Input
              type="password"
              name="newPass"
              placeholder="New Password"
              className={cn(error.password?.new && "border-2 border-red-500")}
            />
            <Details.Input
              type="password"
              name="repeatedPass"
              placeholder="Repeat New Passwrod"
              className={cn(error.password?.new && "border-2 border-red-500")}
            />
            {error.password?.new && (
              <span className="text-center font-semibold text-red-500">
                {error.password?.new}
              </span>
            )}
            <Details.Submit isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
