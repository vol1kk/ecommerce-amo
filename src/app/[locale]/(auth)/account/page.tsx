import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

import { authOptions } from "@/lib/authOptions";
import { SIGN_IN_PAGE } from "@/constants/routes";
import { Details } from "@/components/client/UserDetails";

export type BaseTL = {
  title: string;
  placeholder: string;
  changeTitle: string;
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  const t = await getTranslations("Account");

  if (!session?.user) {
    redirect(SIGN_IN_PAGE);
  }

  const canEdit = session.user.provider === "credentials";

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
        />
        <Details.Email
          canEdit={canEdit}
          initialEmail={session.user.email || ""}
        />
        <Details.Phone number={session.user.phone || ""} />
        <Details.Password canEdit={canEdit} />
      </section>
    </div>
  );
}
