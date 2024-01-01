import { SVGProps } from "@/types";

export function UnisexIcon(props?: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#807D7E"
      width="20"
      height="20"
      baseProfile="tiny"
      overflow="inherit"
      version="1.2"
      viewBox="0 0 50 50"
      id="unisex"
      {...props}
    >
      <circle cx="22.875" cy="4.625" r="4.125"></circle>
      <path d="M22 10h-3c-2.82 0-5 1.719-5 4.587V27c0 2 3 2 3 0V15h1v32c0 1.233.768 2 2 2 1.235 0 2-.767 2-2V10zm13 15l-4.017-10.357C30.634 12.322 28.29 10 25.615 10H23v23.783c.5.002 1 .075 1 .217v13c0 1.04.917 2 2 2 1.086 0 2-.961 2-2V34h3.869c.362 0 1.044-.654 1.044-1 0-.08.029-.931 0-1l-5.909-16.237-.034-.167c0-.237.199-.429.447-.429.211 0 .388.141.435.329L31.869 26c.267.601 1.365 1 2.087 1 .965 0 1.065-1.895 1.044-2z"></path>
    </svg>
  );
}
