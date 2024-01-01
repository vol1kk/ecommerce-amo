"use client";

import { useState } from "react";

import {
  Details,
  DetailsForm,
  DetailsInput,
  hideDetails,
  updateUniqueAction,
} from "@/components/UserDetails";

type DetailsNameViewProps = {
  initialEmail: string;
  isEditable: boolean;
};

export function DetailsEmail({
  initialEmail,
  isEditable,
}: DetailsNameViewProps) {
  const [email, setEmail] = useState(initialEmail);
  const hiddenEmail = hideDetails(email, "email");

  return (
    <Details>
      {(isEditing, setIsEditing, update) =>
        isEditing ? (
          <DetailsForm
            isEditable={isEditable}
            discardHandler={() => setIsEditing(false)}
            action={async formData => {
              const emailRaw = formData.get("email");
              const email = typeof emailRaw === "string" ? emailRaw : "";

              try {
                await updateUniqueAction("email", formData);
                setEmail(email);
                await update(Object.fromEntries(formData));
              } catch (e) {
                console.log(e);
              } finally {
                setIsEditing(false);
              }
            }}
          >
            <div className="mb-4">
              <DetailsInput
                readOnly={!isEditable}
                name="email"
                defaultValue={email}
                placeholder="Email Address"
              />
            </div>
          </DetailsForm>
        ) : (
          <Details.Value
            title="Email Address"
            value={hiddenEmail}
            onClick={() => setIsEditing(true)}
          />
        )
      }
    </Details>
  );
}
