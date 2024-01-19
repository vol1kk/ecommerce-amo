"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import FormButton from "@/components/common/FormButton";
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
    form: [, formAction],
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
            <Input
              id="phone"
              defaultValue={number}
              placeholder={t("placeholder.phone")}
            />
            <FormButton isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
