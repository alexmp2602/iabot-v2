import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#78eb2c", // Color principal
        "text-primary": "#78eb2c", // Color del texto principal
        secondary: "#32cddb", // Color secundario
        text: "#000000", // Color del texto
        background: "#f9f9f9", // Color de fondo
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
      },
      fontFamily: {
        bruno: ['Bruno Ace', 'sans-serif'],
        avenir: ['Avenir LT Std', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
