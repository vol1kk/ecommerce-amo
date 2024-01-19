"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import {
  Details,
  hideEmail,
  useUpdateUser,
} from "@/components/client/UserDetails";

type DetailsEmailProps = {
  id: string;
  email: string;
  canEdit: boolean;
};

export function DetailsEmail({ id, email, canEdit }: DetailsEmailProps) {
  const t = useTranslations("Forms");
  const te = useTranslations("Errors") as (key: string) => string;

  const {
    modal: [isOpen, setIsOpen],
    form: [formErrors, formAction],
  } = useUpdateUser<"email">(id);

  return (
    <Details>
      <Details.View
        title={t("prefixed.email")}
        canEdit={canEdit}
        value={hideEmail(email)}
        onClick={() => setIsOpen(true)}
      >
        <Modal
          title={t("overlay.change_email")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="email"
              defaultValue={email}
              hasError={!!formErrors?.email}
              placeholder={t("placeholder.email")}
            />
            {formErrors?.email && (
              <span className="text-bold mt-1 w-full text-center text-red-500">
                {te(formErrors.email)}
              </span>
            )}
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
