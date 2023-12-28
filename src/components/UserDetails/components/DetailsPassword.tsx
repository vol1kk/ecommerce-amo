import { useRef, useState } from "react";

import {
  Details,
  DetailsForm,
  DetailsInput,
  updatePasswordAction,
  updateUserAction,
} from "@/components/UserDetails";

type DetailsPasswordProps = {
  isEditable: boolean;
};

export function DetailsPassword({ isEditable }: DetailsPasswordProps) {
  const newPassword = useRef<HTMLInputElement>(null);
  const repeatedNewPassword = useRef<HTMLInputElement>(null);

  return (
    <Details>
      {(isEditing, setIsEditing) =>
        isEditing ? (
          <DetailsForm
            isEditable={isEditable}
            action={async formData => {
              try {
                if (
                  newPassword.current?.value &&
                  newPassword.current.value ===
                    repeatedNewPassword.current?.value
                ) {
                  await updateUserAction(formData);
                } else {
                  console.log("New passwords don't match");
                }
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
                name="currentPass"
                placeholder="Current Password"
              />
              <DetailsInput
                ref={newPassword}
                type="password"
                name="newPass"
                placeholder="New Password"
              />
              <DetailsInput
                ref={repeatedNewPassword}
                type="password"
                name="repeatedPass"
                placeholder="Repeat New Password"
              />
            </div>
          </DetailsForm>
        ) : (
          <Details.Value
            title="Password"
            value="********"
            onClick={() => setIsEditing(true)}
          />
        )
      }
    </Details>
  );
}
