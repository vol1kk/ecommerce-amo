"use client";

import { useTranslations } from "next-intl";

import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsNameProps = {
  firstName: string;
  lastName: string;
};

export function DetailsName({ firstName, lastName }: DetailsNameProps) {
  const t = useTranslations("Account");
  const {
    error,
    isEditing,
    formAction,
    setIsEditing,
    state: fullName,
  } = useDetailsForm({
    name: firstName,
    surname: lastName,
  });

  const hiddenName = hideDetails(JSON.stringify(fullName), "name");
  return (
    <Details>
      <Details.View
        title={t("fullname_title")}
        value={hiddenName}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          isEditing={isEditing}
          title={t("fullname_overlay")}
          setIsEditing={setIsEditing}
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
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
