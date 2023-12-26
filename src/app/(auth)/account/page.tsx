import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import { DetailsName } from "@/components/UserDetails/components/DetailsName";
import { DetailsEmail } from "@/components/UserDetails/components/DetailsEmail";
import DetailsNumber from "@/components/UserDetails/components/DetailsNumber";
import DetailsPassword from "@/components/UserDetails/components/DetailsPassword";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return (
      <div>TODO: Content that states that something is wrong with session</div>
    );
  }

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold text-boldColor">My Info</h1>
      <section>
        <h2 className="mb-2 text-xl font-semibold text-boldColor">
          Contact Details
        </h2>
        <DetailsName
          firstName={session.user.name || ""}
          lastName={session.user.surname || ""}
        />
        <DetailsEmail initialEmail={session.user.email || ""} />
        <DetailsNumber number="050-844-66-58" />
        <DetailsPassword />
      </section>
    </div>
  );
}
