import type { Config } from "tailwindcss";
import { functionalTokens } from "./const";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      title: ["var(--font-freudian)", "serif"],
    },
    extend: {
      colors: functionalTokens,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grain": "url('../../public/noise2.png')",
      },
    },
    plugins: [],
  },
};
export default config;
