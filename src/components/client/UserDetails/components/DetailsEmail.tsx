"use client";

import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsEmailProps = {
  initialEmail: string;
  canEdit: boolean;
};

export function DetailsEmail({ initialEmail, canEdit }: DetailsEmailProps) {
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
        title="Your Email"
        canEdit={canEdit}
        value={hiddenEmail}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          title="Email"
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="email"
              placeholder="Email"
              defaultValue={email}
            />
            <Details.Submit isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
