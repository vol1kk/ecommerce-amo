"use client";

import { useFormStatus } from "react-dom";

import Button from "@/components/common/Button";

type DetailsSubmitProps = {
  isEditable: boolean;
};

export function DetailsSubmit({ isEditable }: DetailsSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <div className="grid grid-cols-1 gap-2 font-semibold disabled:[&_button]:cursor-no-drop">
      <Button isSubmit disabled={!isEditable || pending}>
        {isEditable ? "Save" : "Changing isn't allowed"}
      </Button>
    </div>
  );
}
