"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import { updateNameAction } from "@/components/UserDetails/actions/updateNameAction";
import hideDetails from "@/components/UserDetails/utils/hideDetails";

type DetailsNameViewProps = {
  firstName: string;
  lastName: string;
};

export function DetailsName({ firstName, lastName }: DetailsNameViewProps) {
  const { update } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState({
    name: firstName,
    surname: lastName,
  });

  const hiddenName = hideDetails(JSON.stringify(fullName), "name");

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
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
        <DetailsView.Value
          title="Your Name"
          value={hiddenName}
          onClick={() => setIsEditing(true)}
        />
      )}
    </DetailsView>
  );
}
