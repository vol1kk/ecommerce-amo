"use client";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import { updateNameAction } from "@/components/UserDetails/actions/updateNameAction";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import { useState } from "react";

export default function DetailsPassword() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
          discardHandler={() => setIsEditing(false)}
          action={updateNameAction.bind(undefined, "", "")} // Todo: Change to actual name
        >
          <div className="mb-4 grid gap-2">
            <DetailsInput
              type="password"
              value={currentPassword}
              placeholder="Current Password"
              onChange={e => setCurrentPassword(e.currentTarget.value.trim())}
            />
            <DetailsInput
              type="password"
              value={newPassword}
              placeholder="New Password"
              onChange={e => setNewPassword(e.currentTarget.value.trim())}
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
