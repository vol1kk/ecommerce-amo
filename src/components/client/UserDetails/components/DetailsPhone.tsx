"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import {
  Details,
  hidePhone,
  useUpdateUser,
} from "@/components/client/UserDetails";

type DetailsPhoneProps = {
  id: string;
  number: string;
};
export function DetailsPhone({ id, number }: DetailsPhoneProps) {
  const t = useTranslations("Forms");
  const {
    modal: [isOpen, setIsOpen],
    form: [errors, formAction],
  } = useUpdateUser(id);

  return (
    <Details>
      <Details.View
        title={t("prefixed.phone")}
        value={hidePhone(number)}
        onClick={() => setIsOpen(true)}
      >
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={t("overlay.change_phone")}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="phone"
              placeholder={t("placeholder.phone")}
              defaultValue={number}
            />
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
