"use client";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import { updateNameAction } from "@/components/UserDetails/actions/updateNameAction";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import { useState } from "react";
import updatePasswordAction from "@/components/UserDetails/actions/updatePasswordAction";

export default function DetailsPassword() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
          action={async formData => {
            try {
              await updatePasswordAction(formData);
            } catch (e) {
              console.log(e);
            } finally {
              setIsEditing(false);
            }
          }}
          discardHandler={() => setIsEditing(false)}
        >
          <div className="mb-4 grid gap-2">
            <DetailsInput
              type="password"
              name="current-pass"
              placeholder="Current Password"
            />
            <DetailsInput
              type="password"
              name="new-pass"
              placeholder="New Password"
            />
            <DetailsInput
              type="password"
              name="repeat-new-pass"
              placeholder="Repeat New Password"
            />
          </div>
        </DetailsForm>
      ) : (
        <DetailsView.Value
          title="Password"
          value="********"
          onClick={() => setIsEditing(true)}
        />
      )}
    </DetailsView>
  );
}
