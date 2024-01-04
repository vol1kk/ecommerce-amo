"use client";

import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";
import { DetailsSubmitTL } from "@/components/client/UserDetails/components/common/DetailsSubmit";
import { BaseTL } from "@/app/[locale]/(auth)/account/page";

type DetailsEmailProps = {
  initialEmail: string;
  canEdit: boolean;
  tl: BaseTL;
};

export function DetailsEmail({ initialEmail, canEdit, tl }: DetailsEmailProps) {
  const {
    error,
    isEditing,
    formAction,
    state: email,
    setIsEditing,
  } = useDetailsForm(initialEmail);

  const hiddenEmail = hideDetails(email, "email");

  return (
    <Details>
      <Details.View
        title={tl.title}
        canEdit={canEdit}
        value={hiddenEmail}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          title={tl.changeTitle}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="email"
              placeholder={tl.placeholder}
              defaultValue={email}
            />
            <Details.Submit tl={tl.submitTL} isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
