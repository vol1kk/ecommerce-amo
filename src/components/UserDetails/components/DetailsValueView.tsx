import { MouseEvent } from "react";

type DetailsValueView = {
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function DetailsValueView({
  title,
  value,
  onClick,
}: DetailsValueView) {
  return (
    <div className="flex items-center justify-between">
      <div className="grid font-semibold">
        <span className="text-lightColor">{title}</span>
        <span className="text-xl text-boldColor">{value}</span>
      </div>
      <button
        onClick={onClick}
        className="font-black lowercase tracking-widest text-boldColor"
      >
        Change
      </button>
    </div>
  );
}
