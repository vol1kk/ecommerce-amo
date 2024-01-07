import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

import { authOptions } from "@/lib/authOptions";
import { SIGN_IN_PAGE } from "@/constants/routes";
import { Details } from "@/components/client/UserDetails";
import { Addresses } from "@/components/client/UserAddress";

export default async function Page() {
  const t = await getTranslations("Account");
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(SIGN_IN_PAGE);
  }

  const canEdit = session.user.provider === "credentials";

  return (
    <div>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-boldColor">
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
      <Addresses
        title={t("address_details")}
        initialAddresses={session.user.address}
      />
    </div>
  );
}
