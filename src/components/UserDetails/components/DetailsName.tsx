"use client";

import { useState } from "react";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import { updateNameAction } from "@/components/UserDetails/actions/updateNameAction";

type DetailsNameViewProps = {
  firstName: string;
  lastName: string;
};

export function DetailsName({ firstName, lastName }: DetailsNameViewProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(firstName);
  const [surname, setSurname] = useState(lastName);

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
          discardHandler={() => setIsEditing(false)}
          action={updateNameAction.bind(undefined, name, surname)}
        >
          <div className="mb-4 grid grid-cols-2 gap-2">
            <DetailsInput
              value={name}
              placeholder="First Name"
              onChange={e => setName(e.currentTarget.value.trim())}
            />
            <DetailsInput
              value={surname}
              placeholder="Last Name"
              onChange={e => setSurname(e.currentTarget.value.trim())}
            />
          </div>
        </DetailsForm>
      ) : (
        <DetailsView.Value
          title="Your Name"
          value={`${name} ${surname}`.trim()}
          onClick={() => setIsEditing(true)}
        />
      )}
    </DetailsView>
  );
}
