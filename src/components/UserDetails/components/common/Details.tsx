import { ReactNode } from "react";

import { DetailsName } from "@/components/UserDetails/components/DetailsName";
import { DetailsEmail } from "@/components/UserDetails/components/DetailsEmail";
import { DetailsPhone } from "@/components/UserDetails/components/DetailsPhone";
import { DetailsView } from "@/components/UserDetails/components/common/DetailsView";
import { DetailsPassword } from "@/components/UserDetails/components/DetailsPassword";
import { DetailsInput } from "@/components/UserDetails/components/common/DetailsInput";
import { DetailsSubmit } from "@/components/UserDetails/components/common/DetailsSubmit";
import { DetailsOverlay } from "@/components/UserDetails/components/common/DetailsOverlay";

export default function Details({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-6 after:absolute after:inset-x-0 after:-bottom-3 after:h-[2px] after:rounded-md after:bg-accent">
      {children}
    </div>
  );
}

Details.View = DetailsView;
Details.Name = DetailsName;
Details.Email = DetailsEmail;
Details.Phone = DetailsPhone;
Details.Input = DetailsInput;
Details.Submit = DetailsSubmit;
Details.Overlay = DetailsOverlay;
Details.Password = DetailsPassword;
