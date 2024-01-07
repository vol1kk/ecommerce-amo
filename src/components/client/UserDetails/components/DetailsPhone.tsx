"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsPhoneProps = {
  number: string;
};
export function DetailsPhone({ number }: DetailsPhoneProps) {
  const t = useTranslations("Account");
  const {
    error,
    isEditing,
    formAction,
    state: phoneNumber,
    setIsEditing,
  } = useDetailsForm(number);

  const hiddenNumber = hideDetails(phoneNumber, "number");

  return (
    <Details>
      <Details.View
        title={t("your_phone")}
        value={hiddenNumber}
        onClick={() => setIsEditing(true)}
      >
        <Modal
          isOpen={isEditing}
          setIsOpen={setIsEditing}
          title={t("change_phone")}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="phone"
              placeholder={t("phone_placeholder")}
              defaultValue={phoneNumber}
            />
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
