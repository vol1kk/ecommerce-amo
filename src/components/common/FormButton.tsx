"use client";

import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";

import Button from "@/components/common/Button";
import { SpinnerIcon } from "@/components/common/Icons";
import cn from "@/utils/cn";

type DetailsSubmitProps = {
  isEditable?: boolean;
  className?: string;
};

export default function FormButton({
  className,
  isEditable = true,
}: DetailsSubmitProps) {
  const { pending } = useFormStatus();
  const t = useTranslations("Forms");

  return (
    <Button
      isSubmit
      disabled={!isEditable || pending}
      className={cn("font-semibold disabled:cursor-no-drop", className)}
    >
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
  );
}
