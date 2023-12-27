"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import hideDetails from "@/components/UserDetails/utils/hideDetails";
import updateUniqueAction from "@/components/UserDetails/actions/updateUniqueAction";

type DetailsNameViewProps = {
  initialEmail: string;
};

export function DetailsEmail({ initialEmail }: DetailsNameViewProps) {
  const { update } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  const [email, setEmail] = useState(initialEmail);
  const hiddenEmail = hideDetails(email, "email");

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
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
              name="email"
              defaultValue={email}
              placeholder="Email Address"
            />
          </div>
        </DetailsForm>
      ) : (
        <DetailsView.Value
          title="Email Address"
          value={hiddenEmail}
          onClick={() => setIsEditing(true)}
        />
      )}
    </DetailsView>
  );
}
