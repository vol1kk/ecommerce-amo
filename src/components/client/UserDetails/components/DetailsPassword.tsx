"use client";

import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import Modal from "@/components/common/Modal";
import { Details, useDetailsForm } from "@/components/client/UserDetails";

type DetailsPasswordProps = {
  id: string;
  canEdit: boolean;
};

export function DetailsPassword({ id, canEdit }: DetailsPasswordProps) {
  const t = useTranslations("Forms");
  const te = useTranslations("Errors") as (key: string) => string;

  const { isEditing, setIsEditing, formAction, error } = useDetailsForm(
    { currentPass: "", repeatedPass: "", newPass: "" },
    id,
  );

  return (
    <Details>
      <Details.View
        value="*****"
        canEdit={canEdit}
        title={t("prefixed.password")}
        onClick={() => setIsEditing(true)}
      >
        <Modal
          isOpen={isEditing}
          setIsOpen={setIsEditing}
          title={t("overlay.change_password")}
        >
          <form className="grid gap-2" action={formAction}>
            <span className="text-center font-bold">{t("password")}</span>
            <Details.Input
              type="password"
              name="currentPass"
              placeholder={t("password")}
            />
            {error?.currentPass && (
              <span className="text-center font-semibold text-red-500">
                {te(error.currentPass)}
              </span>
            )}
            <span className="text-center font-bold">{t("password_new")}</span>
            <Details.Input
              type="password"
              name="newPass"
              placeholder={t("password_new")}
              className={cn(error?.repeatedPass && "border-2 border-red-500")}
            />
            <Details.Input
              type="password"
              name="repeatedPass"
              placeholder={t("password_repeat")}
              className={cn(error?.repeatedPass && "border-2 border-red-500")}
            />
            {error?.repeatedPass && (
              <span className="text-center font-semibold text-red-500">
                {te(error.repeatedPass)}
              </span>
            )}
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
