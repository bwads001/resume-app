import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#262626",
              100: "#F4F4F4",
              200: "#E9E9E9",
              300: "#BDBDBD",
              400: "#7C7C7C",
              500: "#262626",
              600: "#201B1C",
              700: "#1B1314",
              800: "#160C0E",
              900: "#12070B",
            },
            foreground: "#F5F5F5",
            primary: {
              DEFAULT: "#F5F5F5",
              foreground: "#F5F5F5",
            },
          },
        },
        light: {
          colors: {
            background: {
              DEFAULT: "#F5F5F5",
              100: "#12070B",
              200: "#160C0E",
              300: "#1B1314",
              400: "#201B1C",
              500: "#262626",
              600: "#7C7C7C",
              700: "#BDBDBD",
              800: "#E9E9E9",
              900: "#F4F4F4",
            },
            foreground: "#262626",
            primary: {
              DEFAULT: "#262626",
              foreground: "#262626",
            },
          },
        },
      },
    }),
  ],
};
