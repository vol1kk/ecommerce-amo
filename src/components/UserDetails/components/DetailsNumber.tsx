"use client";

import DetailsView from "@/components/UserDetails/components/DetailsView";
import DetailsForm from "@/components/UserDetails/components/DetailsForm";
import DetailsInput from "@/components/UserDetails/components/DetailsInput";
import { useState } from "react";
import hideDetails from "@/components/UserDetails/utils/hideDetails";
import updateUniqueAction from "@/components/UserDetails/actions/updateUniqueAction";
import { useSession } from "next-auth/react";
import getFormDataStr from "@/components/UserDetails/utils/getFormDataStr";

type DetailsNumberProps = {
  number: string;
};
export default function DetailsNumber({ number }: DetailsNumberProps) {
  const { update } = useSession();

  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(number);

  const hiddenNumber = hideDetails(phoneNumber, "number");

  return (
    <DetailsView>
      {isEditing ? (
        <DetailsForm
          discardHandler={() => setIsEditing(false)}
          action={async formData => {
            const phoneField = getFormDataStr(formData, "phone");

            try {
              await updateUniqueAction("phone", formData);
              setPhoneNumber(phoneField);
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
              name="phone"
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
