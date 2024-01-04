"use client";

import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";
import { DetailsSubmitTL } from "@/components/client/UserDetails/components/common/DetailsSubmit";
import { BaseTL } from "@/app/[locale]/(auth)/account/page";

type DetailsNameProps = {
  firstName: string;
  lastName: string;
  tl: Omit<BaseTL, "placeholder"> & { name: string; surname: string };
};

export function DetailsName({ firstName, lastName, tl }: DetailsNameProps) {
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
        title={tl.title}
        value={hiddenName}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          isEditing={isEditing}
          title={tl.changeTitle}
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
              placeholder={tl.name}
              defaultValue={fullName.name}
            />
            <Details.Input
              name="surname"
              placeholder={tl.surname}
              defaultValue={fullName.surname}
            />
            {error?.fullName && (
              <span className="text-red-500">{error.fullName}</span>
            )}
            <Details.Submit
              isEditable
              tl={{
                editable: tl.submitTL.editable,
                notEditable: tl.submitTL.notEditable,
              }}
            />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
