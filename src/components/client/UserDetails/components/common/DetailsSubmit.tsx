"use client";

import { useFormStatus } from "react-dom";

import Button from "@/components/common/Button";

export type DetailsSubmitTL = {
  editable: string;
  notEditable: string;
};

type DetailsSubmitProps = {
  isEditable: boolean;
  tl: DetailsSubmitTL;
};

export function DetailsSubmit({ isEditable, tl }: DetailsSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <div className="grid grid-cols-1 gap-2 font-semibold disabled:[&_button]:cursor-no-drop">
      <Button isSubmit disabled={!isEditable || pending}>
        {isEditable ? tl.editable : tl.notEditable}
      </Button>
    </div>
  );
}
