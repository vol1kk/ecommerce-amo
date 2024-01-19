"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsPhoneProps = {
  id: string;
  number: string;
};
export function DetailsPhone({ id, number }: DetailsPhoneProps) {
  const t = useTranslations("Forms");
  const { isEditing, formAction, state, setIsEditing } = useDetailsForm(
    { number },
    id,
  );

  const hiddenNumber = hideDetails(state.number, "number");

  return (
    <Details>
      <Details.View
        title={t("prefixed.phone")}
        value={hiddenNumber}
        onClick={() => setIsEditing(true)}
      >
        <Modal
          isOpen={isEditing}
          setIsOpen={setIsEditing}
          title={t("overlay.change_phone")}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="phone"
              placeholder={t("placeholder.phone")}
              defaultValue={state.number}
            />
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
