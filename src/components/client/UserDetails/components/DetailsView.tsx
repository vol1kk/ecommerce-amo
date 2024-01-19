import { MouseEvent, ReactNode } from "react";

import { EditIcon } from "@/components/common/Icons";
import { useTranslations } from "next-intl";

type DetailsValue = {
  title: string;
  children: ReactNode;
  canEdit?: boolean;
  value: string | undefined;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function DetailsView({
  title,
  value,
  onClick,
  children,
  canEdit = true,
}: DetailsValue) {
  const t = useTranslations("General");

  return (
    <div className="grid grid-cols-[1fr,auto] gap-2 sm:grid-cols-1 sm:justify-items-center">
      <div className="font-semibold">
        <h3 className="text-lightColor sm:text-center">{title}</h3>
        <span className="text-xl text-boldColor">
          {value || t("not_selected")}
        </span>
        {children}
      </div>
      <button
        onClick={onClick}
        disabled={!canEdit}
        className="rounded-full bg-purple-700  p-3 disabled:cursor-no-drop [&>svg]:stroke-white"
      >
        <EditIcon />
      </button>
    </div>
  );
}
