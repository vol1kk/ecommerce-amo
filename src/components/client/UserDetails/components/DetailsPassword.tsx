"use client";

import cn from "@/utils/cn";
import { Details, useDetailsForm } from "@/components/client/UserDetails";
import { BaseTL } from "@/app/[locale]/(auth)/account/page";

type DetailsPasswordProps = {
  canEdit: boolean;
  tl: Omit<BaseTL, "placeholder"> & {
    currPas: string;
    newPass: string;
    repeatPass: string;
  };
};

export function DetailsPassword({ canEdit, tl }: DetailsPasswordProps) {
  const { isEditing, setIsEditing, formAction, error } = useDetailsForm("");

  return (
    <Details>
      <Details.View
        value="*****"
        canEdit={canEdit}
        title={tl.title}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          title={tl.changeTitle}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              type="password"
              name="currentPass"
              placeholder={tl.currPas}
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
              placeholder={tl.newPass}
              className={cn(error.password?.new && "border-2 border-red-500")}
            />
            <Details.Input
              type="password"
              name="repeatedPass"
              placeholder={tl.repeatPass}
              className={cn(error.password?.new && "border-2 border-red-500")}
            />
            {error.password?.new && (
              <span className="text-center font-semibold text-red-500">
                {error.password?.new}
              </span>
            )}
            <Details.Submit tl={tl.submitTL} isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
