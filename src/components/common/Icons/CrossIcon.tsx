import { SVGProps } from "@/types";

export function CrossIcon(props?: SVGProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 1L1 15M15 15L1 1.00001"
        stroke="#3C4242"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
