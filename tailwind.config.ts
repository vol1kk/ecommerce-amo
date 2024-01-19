import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#F6F6F6",
        lightColor: "#807D7E",
        boldColor: "#3C4242",
      },
      screens: {
        "xl-max": { max: "1280px" },
        lg: { max: "1023px" },
        "md-header": { max: "806px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        "sm-l": { max: "380px" },
        "sm-x": { max: "340px" },
      },
      maxWidth: {
        container: "1260px",
      },
    },
  },
  plugins: [],
};
export default config;
