import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

import { authOptions } from "@/lib/authOptions";
import { SIGN_IN_PAGE } from "@/constants/routes";
import { Details } from "@/components/client/UserDetails";
import { DetailsSubmitTL } from "@/components/client/UserDetails/components/common/DetailsSubmit";

export type BaseTL = {
  title: string;
  placeholder: string;
  changeTitle: string;
  submitTL: DetailsSubmitTL;
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  const t = await getTranslations("Account");

  if (!session?.user) {
    redirect(SIGN_IN_PAGE);
  }

  const canEdit = session.user.provider === "credentials";

  const submitTL = {
    editable: t("submit_allowed"),
    notEditable: t("submit_disallowed"),
  } satisfies DetailsSubmitTL;

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold text-boldColor">{t("info")}</h1>
      <section>
        <h2 className="mb-2 text-xl font-semibold text-boldColor">
          {t("contact_details")}
        </h2>
        <Details.Name
          firstName={session.user.name || ""}
          lastName={session.user.surname || ""}
          tl={{
            title: t("fullname_title"),
            changeTitle: t("fullname_overlay"),
            name: t("name_placeholder"),
            surname: t("surname_placeholder"),
            submitTL,
          }}
        />
        <Details.Email
          canEdit={canEdit}
          initialEmail={session.user.email || ""}
          tl={{
            title: t("your_email"),
            placeholder: t("email_placeholder"),
            changeTitle: t("change_email"),
            submitTL,
          }}
        />
        <Details.Phone
          number={session.user.phone || ""}
          tl={{
            title: t("your_phone"),
            placeholder: t("phone_placeholder"),
            changeTitle: t("change_phone"),
            submitTL,
          }}
        />
        <Details.Password
          tl={{
            title: t("your_password"),
            currPas: t("password_current"),
            newPass: t("password_new"),
            repeatPass: t("password_repeat"),
            changeTitle: t("change_password"),
            submitTL,
          }}
          canEdit={canEdit}
        />
      </section>
    </div>
  );
}
