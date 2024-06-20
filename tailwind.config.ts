import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': { 'max': '991px' },
      'betmt': { 'max': '767px' },
      'mobile': { 'max': '479px' },
    },
    extend: {
      fontFamily: {
        fk: ['var(--font-fk)'],
        fkAlt: ['var(--font-fkAlt)'],
        grotesk: ['var(--font-grotesk)'],

      }
      ,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
