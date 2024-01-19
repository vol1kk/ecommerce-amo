"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
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
    form: [formErrors, formAction],
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
            <Details.Input
              name="name"
              placeholder={t("placeholder.name")}
              defaultValue={name}
            />
            <Details.Input
              name="surname"
              placeholder={t("placeholder.surname")}
              defaultValue={surname}
            />
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
