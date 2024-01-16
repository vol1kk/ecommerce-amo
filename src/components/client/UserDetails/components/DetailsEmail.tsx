"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsEmailProps = {
  id: string;
  initialEmail: string;
  canEdit: boolean;
};

export function DetailsEmail({ id, initialEmail, canEdit }: DetailsEmailProps) {
  const t = useTranslations("Account");
  const { error, isEditing, formAction, state, setIsEditing } = useDetailsForm(
    { email: initialEmail },
    id,
  );

  const hiddenEmail = hideDetails(state.email, "email");

  return (
    <Details>
      <Details.View
        title={t("your_email")}
        canEdit={canEdit}
        value={hiddenEmail}
        onClick={() => setIsEditing(true)}
      >
        <Modal
          title={t("change_email")}
          isOpen={isEditing}
          setIsOpen={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="email"
              placeholder={t("email_placeholder")}
              defaultValue={state.email}
            />
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
