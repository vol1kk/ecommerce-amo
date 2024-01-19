"use client";

import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";

import Button from "@/components/common/Button";
import { SpinnerIcon } from "@/components/common/Icons";

type DetailsSubmitProps = {
  isEditable: boolean;
};

export function DetailsSubmit({ isEditable }: DetailsSubmitProps) {
  const { pending } = useFormStatus();
  const t = useTranslations("Forms");

  return (
    <div className="grid grid-cols-1 gap-2 font-semibold disabled:[&_button]:cursor-no-drop">
      <Button isSubmit disabled={!isEditable || pending}>
        <span className="flex justify-center gap-2">
          {pending && (
            <SpinnerIcon
              width={24}
              className="animate-spin fill-white text-purple-700"
            />
          )}
          {isEditable && pending && t("submit_pending")}
          {isEditable && !pending && t("submit_allowed")}
          {!isEditable && t("submit_disallowed")}
        </span>
      </Button>
    </div>
  );
}
