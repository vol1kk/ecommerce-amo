"use client";

import { useState } from "react";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import { updateNameAction } from "@/components/UserDetails/actions/updateNameAction";

type DetailsNameViewProps = {
  initialEmail: string;
};

export function DetailsEmail({ initialEmail }: DetailsNameViewProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [email, setEmail] = useState(initialEmail);
  const [name, domain] = email.split("@");
  const [beforeDot, afterDot] = domain.split(".");

  const hiddenName = name.slice(0, 3).padEnd(10, "*");
  const hiddenDomain =
    beforeDot.slice(0, 1).padEnd(5, "*") +
    "." +
    "".padStart(afterDot.length, "*");

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
          discardHandler={() => setIsEditing(false)}
          action={updateNameAction.bind(undefined, "", "")} // Todo: Change to actual name
        >
          <div className="mb-4">
            <DetailsInput
              value={email}
              placeholder="Email Address"
              onChange={e => setEmail(e.currentTarget.value.trim())}
            />
          </div>
        </DetailsForm>
      ) : (
        <DetailsView.Value
          title="Email Address"
          value={`${hiddenName}@${hiddenDomain}`}
          onClick={() => setIsEditing(true)}
        />
      )}
    </DetailsView>
  );
}
