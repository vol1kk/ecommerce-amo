"use client";

import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";
import { useTranslations } from "next-intl";

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
        <Details.Overlay
          isEditing={isEditing}
          title={t("change_phone")}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="phone"
              placeholder={t("phone_placeholder")}
              defaultValue={phoneNumber}
            />
            <Details.Submit isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
