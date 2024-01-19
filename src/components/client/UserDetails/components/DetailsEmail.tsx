"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";
import { useEffect } from "react";

type DetailsEmailProps = {
  id: string;
  initialEmail: string;
  canEdit: boolean;
};

const errorClasses = "text-bold mt-1 w-full text-center text-red-500";

export function DetailsEmail({ id, initialEmail, canEdit }: DetailsEmailProps) {
  const t = useTranslations("Forms");
  const te = useTranslations("Errors") as (key: string) => string;

  const { error, isEditing, formAction, state, setIsEditing } = useDetailsForm(
    { email: initialEmail },
    id,
  );

  const hiddenEmail = hideDetails(state.email, "email");

  return (
    <Details>
      <Details.View
        title={t("prefixed.email")}
        canEdit={canEdit}
        value={hiddenEmail}
        onClick={() => setIsEditing(true)}
      >
        <Modal
          title={t("overlay.change_email")}
          isOpen={isEditing}
          setIsOpen={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="email"
              placeholder={t("placeholder.email")}
              defaultValue={state.email}
            />
            {error?.email && (
              <span className="text-bold mt-1 w-full text-center text-red-500">
                {te(error.email)}
              </span>
            )}
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
