"use client";

import { useState } from "react";

import {
  Details,
  DetailsForm,
  hideDetails,
  DetailsInput,
  getFormDataStr,
  updateUserAction,
} from "@/components/UserDetails";

type DetailsNumberProps = {
  number: string;
  isEditable: boolean;
};
export function DetailsPhone({ number, isEditable }: DetailsNumberProps) {
  const [phoneNumber, setPhoneNumber] = useState(number);

  const hiddenNumber = hideDetails(phoneNumber, "number");

  return (
    <Details>
      {(isEditing, setIsEditing, update) =>
        isEditing ? (
          <DetailsForm
            isEditable={isEditable}
            discardHandler={() => setIsEditing(false)}
            action={async formData => {
              try {
                await updateUserAction(formData);
                await update(Object.fromEntries(formData));

                setPhoneNumber(getFormDataStr(formData, "phone"));
              } catch (e) {
                console.log(e);
              } finally {
                setIsEditing(false);
              }
            }}
          >
            <div className="mb-4">
              <DetailsInput
                name="phone"
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={e => setPhoneNumber(e.currentTarget.value.trim())}
              />
            </div>
          </DetailsForm>
        ) : (
          <Details.Value
            title="Phone Number"
            value={hiddenNumber}
            onClick={() => setIsEditing(true)}
          />
        )
      }
    </Details>
  );
}
