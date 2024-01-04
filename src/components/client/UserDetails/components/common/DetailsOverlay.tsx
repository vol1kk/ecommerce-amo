import OverlayPortal from "@/components/common/Overlay";
import { Dispatch, ReactNode, SetStateAction } from "react";

// TODO: ICON
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

type DetailsOverlayProps = {
  isEditing: boolean;
  title: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

export function DetailsOverlay({
  children,
  title,
  isEditing,
  setIsEditing,
}: DetailsOverlayProps) {
  return (
    <OverlayPortal
      isOpen={isEditing}
      className="z-50 bg-boldColor bg-opacity-50"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 pt-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{title}</span>
          <button
            className="p-4"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </OverlayPortal>
  );
}
