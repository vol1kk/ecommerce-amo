"use client";

import { BaseTL } from "@/app/[locale]/(auth)/account/page";
import {
  Details,
  hideDetails,
  useDetailsForm,
} from "@/components/client/UserDetails";

type DetailsPhoneProps = {
  number: string;
  tl: BaseTL;
};
export function DetailsPhone({ number, tl }: DetailsPhoneProps) {
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
        title={tl.title}
        value={hiddenNumber}
        onClick={() => setIsEditing(true)}
      >
        <Details.Overlay
          isEditing={isEditing}
          title={tl.changeTitle}
          setIsEditing={setIsEditing}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              name="phone"
              placeholder={tl.placeholder}
              defaultValue={phoneNumber}
            />
            <Details.Submit tl={tl.submitTL} isEditable />
          </form>
        </Details.Overlay>
      </Details.View>
    </Details>
  );
}
