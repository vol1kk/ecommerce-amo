"use client";

import { useTranslations } from "next-intl";

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
  const t = useTranslations("Account");
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
        title={t("your_email")}
        canEdit={canEdit}
        value={hiddenEmail}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          title={t("change_email")}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="email"
              placeholder={t("email_placeholder")}
              defaultValue={email}
            />
            <Details.Submit isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
