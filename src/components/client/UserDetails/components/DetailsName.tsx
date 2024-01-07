"use client";

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
        title="Your Name"
        value={hiddenName}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          title="Name"
          isEditing={isEditing}
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
              placeholder="Name"
              defaultValue={fullName.name}
            />
            <Details.Input
              name="surname"
              placeholder="Surname"
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
