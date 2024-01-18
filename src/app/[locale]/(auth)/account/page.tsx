import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { SIGN_IN_PAGE } from "@/constants/routes";
import { Details } from "@/components/client/UserDetails";
import { Addresses } from "@/components/client/UserAddress";
import { UserService } from "@/services/UserService";

export default async function Page() {
  const t = await getTranslations("General");
  const user = await UserService.findMe();

  if (!user) {
    redirect(SIGN_IN_PAGE);
  }

  const canEdit = user.accounts.type !== "oauth";

  return (
    <div>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-boldColor">
          {t("contact_details")}
        </h2>
        <Details.Name
          id={user.id}
          firstName={user.name || ""}
          lastName={user.surname || ""}
        />
        <Details.Email
          id={user.id}
          canEdit={canEdit}
          initialEmail={user.email || ""}
        />
        <Details.Phone id={user.id} number={user.phone || ""} />
        <Details.Password id={user.id} canEdit={canEdit} />
      </section>
      <Addresses title={t("address_details")} initialAddresses={user.address} />
    </div>
  );
}
