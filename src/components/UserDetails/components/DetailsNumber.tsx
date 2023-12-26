"use client";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import { updateNameAction } from "@/components/UserDetails/actions/updateNameAction";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import { useState } from "react";

type DetailsNumberProps = {
  number: string;
};
export default function DetailsNumber({ number }: DetailsNumberProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(number);

  const numberBeginning = phoneNumber.slice(0, 3);
  const numberEnd = phoneNumber.slice(-2);
  const hiddenNumber =
    numberBeginning.padEnd(
      phoneNumber.length - numberEnd.length - numberBeginning.length,
      "*",
    ) + numberEnd;

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
          discardHandler={() => setIsEditing(false)}
          action={updateNameAction.bind(undefined, "", "")} // Todo: Change to actual name
        >
          <div className="mb-4">
            <DetailsInput
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={e => setPhoneNumber(e.currentTarget.value.trim())}
            />
          </div>
        </DetailsForm>
      ) : (
        <DetailsView.Value
          title="Phone Number"
          value={hiddenNumber}
          onClick={() => setIsEditing(true)}
        />
      )}
    </DetailsView>
  );
}
