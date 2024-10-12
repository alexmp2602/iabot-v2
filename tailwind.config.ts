import { nextui } from '@nextui-org/theme';
import tailwindcssAnimate from 'tailwindcss-animate';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#78eb2c",
        secondary: "#32cddb",
        text: "#000000",
        background: "#f9f9f9",
        darkBackground: "#4A4A4A",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
      },
      fontFamily: {
        bruno: ['"Bruno Ace"', "sans-serif"],
        avenir: ["Avenir LT Std", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate, nextui()],
};

export default config;
