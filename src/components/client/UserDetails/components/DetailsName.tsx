"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsNameProps = {
  id: string;
  firstName: string;
  lastName: string;
};

export function DetailsName({ id, firstName, lastName }: DetailsNameProps) {
  const t = useTranslations("Account");
  const {
    error,
    isEditing,
    formAction,
    setIsEditing,
    state: fullName,
  } = useDetailsForm(
    {
      name: firstName,
      surname: lastName,
    },
    id,
  );

  const hiddenName = hideDetails(JSON.stringify(fullName), "name");
  return (
    <Details>
      <Details.View
        value={hiddenName}
        title={t("fullname_title")}
        onClick={() => setIsEditing(true)}
      >
        <Modal
          isOpen={isEditing}
          setIsOpen={setIsEditing}
          title={t("fullname_overlay")}
        >
          <form
            className="grid gap-2"
            action={async formData => {
              formAction(formData);
            }}
          >
            <Details.Input
              name="name"
              placeholder={t("name_placeholder")}
              defaultValue={fullName.name}
            />
            <Details.Input
              name="surname"
              placeholder={t("surname_placeholder")}
              defaultValue={fullName.surname}
            />
            {error?.fullName && (
              <span className="text-red-500">{error.fullName}</span>
            )}
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
