"use client";

import { useState } from "react";

import {
  Details,
  hideDetails,
  DetailsForm,
  DetailsInput,
  updateNameAction,
} from "@/components/UserDetails";

type DetailsNameViewProps = {
  firstName: string;
  lastName: string;
  isEditable: boolean;
};

export function DetailsName({
  firstName,
  lastName,
  isEditable,
}: DetailsNameViewProps) {
  const [fullName, setFullName] = useState({
    name: firstName,
    surname: lastName,
  });

  const hiddenName = hideDetails(JSON.stringify(fullName), "name");

  return (
    <Details>
      {(isEditing, setIsEditing, update) =>
        isEditing ? (
          <DetailsForm
            isEditable={isEditable}
            action={async formData => {
              try {
                await updateNameAction(formData);
                const formObj = Object.fromEntries(formData) as typeof fullName;

                setFullName(formObj);
                await update(formObj);
              } catch (e) {
                console.log(e);
              } finally {
                setIsEditing(false);
              }
            }}
            discardHandler={() => setIsEditing(false)}
          >
            <div className="mb-4 grid grid-cols-2 gap-2">
              <DetailsInput
                name="name"
                placeholder="First Name"
                defaultValue={fullName.name}
              />
              <DetailsInput
                name="surname"
                placeholder="Last Name"
                defaultValue={fullName.surname}
              />
            </div>
          </DetailsForm>
        ) : (
          <Details.Value
            title="Your Name"
            value={hiddenName}
            onClick={() => setIsEditing(true)}
          />
        )
      }
    </Details>
  );
}
