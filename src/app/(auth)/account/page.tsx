import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import AccountDetails from "@/components/Account/components/AccountDetails";
import { Details } from "@/components/UserDetails";
import { redirect } from "next/navigation";
import { SIGN_IN_PAGE } from "@/constants/routes";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(SIGN_IN_PAGE);
  }

  const canEdit = session.user.provider === "credentials";

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold text-boldColor">My Info</h1>
      <section>
        <h2 className="mb-2 text-xl font-semibold text-boldColor">
          Contact Details
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
