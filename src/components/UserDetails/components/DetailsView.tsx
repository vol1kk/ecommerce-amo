import { ReactNode } from "react";

import { DetailsName } from "@/components/UserDetails/components/DetailsName";
import DetailsNumber from "@/components/UserDetails/components/DetailsNumber";
import { DetailsEmail } from "@/components/UserDetails/components/DetailsEmail";
import DetailsPassword from "@/components/UserDetails/components/DetailsPassword";
import DetailsValueView from "@/components/UserDetails/components/DetailsValueView";

export default function DetailsView({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-6 after:absolute after:inset-x-0 after:-bottom-3 after:h-[2px] after:rounded-md after:bg-accent">
      {children}
    </div>
  );
}

DetailsView.Value = DetailsValueView;
DetailsView.Name = DetailsName;
DetailsView.Email = DetailsEmail;
DetailsView.Phone = DetailsNumber;
DetailsView.Password = DetailsPassword;
