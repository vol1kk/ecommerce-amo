"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import FormButton from "@/components/common/FormButton";
import {
  Details,
  hideName,
  useUpdateUser,
} from "@/components/client/UserDetails";

type DetailsNameProps = {
  id: string;
  name: string;
  surname: string;
};

export function DetailsName({ id, name, surname }: DetailsNameProps) {
  const t = useTranslations("Forms");
  const {
    modal: [isOpen, setIsOpen],
    form: [, formAction],
  } = useUpdateUser<"name" | "surname">(id);

  return (
    <Details>
      <Details.View
        value={hideName({ name, surname })}
        title={t("prefixed.name")}
        onClick={() => setIsOpen(true)}
      >
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={t("overlay.fullname_overlay")}
        >
          <form className="grid gap-2" action={formAction}>
            <Input
              id="name"
              defaultValue={name}
              placeholder={t("placeholder.name")}
            />
            <Input
              id="surname"
              defaultValue={surname}
              placeholder={t("placeholder.surname")}
            />
            <FormButton isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
