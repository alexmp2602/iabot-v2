import { nextui } from '@nextui-org/theme';
import tailwindcssAnimate from 'tailwindcss-animate';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modo claro
        primary: '#78eb2c',
        secondary: '#32cddb',
        text: '#000000',
        // Punto medio
        'light-gray': '#f9f9f9',
        // Modo oscuro
        'dark-primary': '#78eb2c',
        'dark-secondary': '#32cddb',
        'dark-bg': '#0d0d0d',
        'dark-text': '#f9f9f9',
        'dark-gray': '#282828',
      },
      fontFamily: {
        bruno: ['"Bruno Ace"', 'sans-serif'],
        avenir: ['Avenir LT Std', 'sans-serif'],
      },
      keyframes: {
        expand: {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' },
        },
        collapse: {
          '0%': { height: 'var(--radix-accordion-content-height)' },
          '100%': { height: '0' },
        },
      },
      animation: {
        expand: 'expand 300ms ease-out',
        collapse: 'collapse 300ms ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate, nextui()],
};

export default config;
