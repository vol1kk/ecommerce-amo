"use client";

import { useFormStatus } from "react-dom";

import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";

type DetailsSubmitProps = {
  isEditable: boolean;
};

export function DetailsSubmit({ isEditable }: DetailsSubmitProps) {
  const { pending } = useFormStatus();
  const t = useTranslations("Account");

  return (
    <div className="grid grid-cols-1 gap-2 font-semibold disabled:[&_button]:cursor-no-drop">
      <Button isSubmit disabled={!isEditable || pending}>
        {isEditable ? t("submit_allowed") : t("submit_disallowed")}
      </Button>
    </div>
  );
}
