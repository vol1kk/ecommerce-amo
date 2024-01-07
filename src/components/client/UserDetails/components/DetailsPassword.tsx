"use client";

import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import Modal from "@/components/common/Modal";
import { Details, useDetailsForm } from "@/components/client/UserDetails";

type DetailsPasswordProps = {
  canEdit: boolean;
};

export function DetailsPassword({ canEdit }: DetailsPasswordProps) {
  const t = useTranslations("Account");
  const { isEditing, setIsEditing, formAction, error } = useDetailsForm("");

  return (
    <Details>
      <Details.View
        value="*****"
        canEdit={canEdit}
        title={t("your_password")}
        onClick={() => setIsEditing(true)}
      >
        <Modal
          isOpen={isEditing}
          setIsOpen={setIsEditing}
          title={t("change_password")}
        >
          <form className="grid gap-2" action={formAction}>
            <Details.Input
              type="password"
              name="currentPass"
              placeholder={t("password_current")}
              className={cn(error.password?.old && "border-2 border-red-500")}
            />
            {error.password?.old && (
              <span className="text-center font-semibold text-red-500">
                {error.password?.old}
              </span>
            )}
            <Details.Input
              type="password"
              name="newPass"
              placeholder={t("password_new")}
              className={cn(error.password?.new && "border-2 border-red-500")}
            />
            <Details.Input
              type="password"
              name="repeatedPass"
              placeholder={t("password_repeat")}
              className={cn(error.password?.new && "border-2 border-red-500")}
            />
            {error.password?.new && (
              <span className="text-center font-semibold text-red-500">
                {error.password?.new}
              </span>
            )}
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
