import { MouseEvent } from "react";

type DetailsValue = {
  title: string;
  value: string | undefined;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function DetailsValue({ title, value, onClick }: DetailsValue) {
  return (
    <div className="flex items-center justify-between">
      <div className="grid font-semibold">
        <span className="text-lightColor">{title}</span>
        <span className="text-xl text-boldColor">{value || "None"}</span>
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
