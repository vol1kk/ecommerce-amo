import { ReactNode } from "react";
import DetailsValueView from "@/components/UserDetails/components/DetailsValueView";

export default function DetailsView({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-6 after:absolute after:inset-x-0 after:-bottom-3 after:h-[2px] after:rounded-md after:bg-accent">
      {children}
    </div>
  );
}

DetailsView.Value = DetailsValueView;
