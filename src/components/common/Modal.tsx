import { Dispatch, ReactNode, SetStateAction } from "react";

import Overlay from "@/components/common/Overlay";
import { CrossIcon } from "@/components/common/Icons";

type DetailsOverlayProps = {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  children,
  title,
  isOpen,
  setIsOpen,
}: DetailsOverlayProps) {
  return (
    <Overlay
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="z-50 bg-boldColor bg-opacity-50"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 pt-4 shadow-2xl">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg font-bold">{title}</span>
          <button
            className="p-4"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CrossIcon />
          </button>
        </div>
        {children}
      </div>
    </Overlay>
  );
}
