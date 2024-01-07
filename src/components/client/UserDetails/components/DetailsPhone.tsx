"use client";

import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsPhoneProps = {
  number: string;
};
export function DetailsPhone({ number }: DetailsPhoneProps) {
  const {
    error,
    isEditing,
    formAction,
    state: phoneNumber,
    setIsEditing,
  } = useDetailsForm(number);

  const hiddenNumber = hideDetails(phoneNumber, "number");

  return (
    <Details>
      <Details.View
        title="Your Phone"
        value={hiddenNumber}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          title="Phone"
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="phone"
              placeholder="Phone Number"
              defaultValue={phoneNumber}
            />
            <Details.Submit isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
