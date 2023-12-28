"use client";

import { MouseEvent } from "react";
import { useFormStatus } from "react-dom";

import Button from "@/components/common/Button";

type DetailsFormHandlersProps = {
  isEditable: boolean;
  discardHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function DetailsFormHandlers({
  isEditable,
  discardHandler,
}: DetailsFormHandlersProps) {
  const { pending } = useFormStatus();

  return (
    <div className="grid grid-cols-1 gap-2 font-semibold disabled:[&_button]:cursor-no-drop">
      <Button isSubmit disabled={!isEditable || pending}>
        {isEditable ? "Save" : "Changing isn't allowed"}
      </Button>
      <Button onClick={discardHandler} disabled={pending}>
        Discard
      </Button>
    </div>
  );
}
