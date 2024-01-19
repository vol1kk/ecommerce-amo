"use client";

import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import { Details, useUpdateUser } from "@/components/client/UserDetails";

type DetailsPasswordProps = {
  id: string;
  canEdit: boolean;
};

export function DetailsPassword({ id, canEdit }: DetailsPasswordProps) {
  const t = useTranslations("Forms");
  const te = useTranslations("Errors") as (key: string) => string;

  const {
    modal: [isOpen, setIsOpen],
    form: [errors, formAction],
  } = useUpdateUser<"currentPass" | "repeatedPass" | "newPass">(id);

  return (
    <Details>
      <Details.View
        value="*****"
        canEdit={canEdit}
        title={t("prefixed.password")}
        onClick={() => setIsOpen(true)}
      >
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={t("overlay.change_password")}
        >
          <form className="grid gap-2" action={formAction}>
            <span className="text-center font-bold">{t("password")}</span>
            <Details.Input
              type="password"
              name="currentPass"
              hasError={!!errors?.currentPass}
              placeholder={t("password")}
            />
            {errors?.currentPass && (
              <span className="text-center font-semibold text-red-500">
                {te(errors.currentPass)}
              </span>
            )}
            <span className="text-center font-bold">{t("password_new")}</span>
            <Details.Input
              type="password"
              name="newPass"
              hasError={!!errors?.newPass}
              placeholder={t("password_new")}
            />
            <Details.Input
              type="password"
              name="repeatedPass"
              hasError={!!errors?.repeatedPass}
              placeholder={t("password_repeat")}
            />
            {errors?.repeatedPass && (
              <span className="text-center font-semibold text-red-500">
                {te(errors.repeatedPass)}
              </span>
            )}
            <Details.Submit isEditable />
          </form>
        </Modal>
      </Details.View>
    </Details>
  );
}
