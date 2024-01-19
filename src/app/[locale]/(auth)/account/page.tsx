import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { SIGN_IN_PAGE } from "@/constants/routes";
import { UserService } from "@/services/UserService";
import { Details, hidePhone } from "@/components/client/UserDetails";
import { Address, Addresses } from "@/components/client/UserAddress";

export default async function Page() {
  const t = await getTranslations("General");
  const user = await UserService.findMe();

  if (!user) {
    redirect(SIGN_IN_PAGE);
  }

  const canEdit = user.accounts.type === "oauth";

  return (
    <div>
      <section>
        <h2 className="mb-2 text-2xl font-semibold text-boldColor">
          {t("contact_details")}
        </h2>
        <Details.Name
          id={user.id}
          name={user.name || ""}
          surname={user.surname || ""}
        />
        <Details.Email
          id={user.id}
          canEdit={!canEdit}
          email={user.email || ""}
        />
        <Details.Phone id={user.id} number={user.phone || ""} />
        <Details.Password id={user.id} canEdit={!canEdit} />
      </section>
      <Addresses title={t("address_details")} addresses={user.address}>
        {user.address.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {user.address?.map(address => (
              <Address key={address.id}>
                <h3 className="text-xl font-bold">
                  {address.name} {address.surname}
                </h3>
                <div>
                  <p>{hidePhone(address.phone)}</p>
                  <p>
                    {address.address}, {address.city}
                  </p>
                </div>
                <Address.Tags tags={["Home"]} isDefault={address.isDefault} />
                <Address.Actions>
                  <Address.Delete id={address.id} />
                  <Address.Update address={address} />
                </Address.Actions>
              </Address>
            ))}
          </div>
        ) : (
          <h2 className="text-center text-2xl font-semibold">
            No addresses added <span className="font-bold">:(</span>
          </h2>
        )}
      </Addresses>
    </div>
  );
}
