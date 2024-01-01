import { SVGProps } from "@/types";

type StarIconProps = {
  fillStyle?: "empty" | "half" | "full";
} & SVGProps;

export function StarIcon({ fillStyle = "empty", ...props }: StarIconProps) {
  if (fillStyle === "empty") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21.7476 9.12325L14.7991 8.52407L12.0835 2.12646L9.36789 8.53374L2.41943 9.12325L7.69601 13.6943L6.11111 20.4882L12.0835 16.8835L18.0559 20.4882L16.4806 13.6943L21.7476 9.12325ZM12.0835 15.0763L8.44981 17.2701L9.41621 13.1338L6.20775 10.3506L10.4406 9.98335L12.0835 6.08873L13.7361 9.99301L17.9689 10.3602L14.7604 13.1435L15.7268 17.2797L12.0835 15.0763Z"
          fill="#EDD146"
        />
      </svg>
    );
  }

  if (fillStyle === "half") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6882 9.12325L14.7398 8.52407L12.0242 2.12646L9.30857 8.53374L2.36011 9.12325L7.63669 13.6943L6.05178 20.4882L12.0242 16.8835L17.9966 20.4882L16.4213 13.6943L21.6882 9.12325ZM12.0242 15.0763V6.08873L13.6767 9.99301L17.9096 10.3602L14.7011 13.1435L15.6675 17.2797L12.0242 15.0763Z"
          fill="#EDD146"
        />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9141 16.8835L17.8865 20.4882L16.3015 13.6943L21.5781 9.12325L14.6297 8.53374L11.9141 2.12646L9.19846 8.53374L2.25 9.12325L7.52658 13.6943L5.94167 20.4882L11.9141 16.8835Z"
        fill="#EDD146"
      />
    </svg>
  );
}
