import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightSecondary: "#D0E4E5",
        placeholder: "#CBD5E1",
        background: "var(--background)",
        "light-primary": "var(--light-primary)",
        "light-secondary": "var(--light-secondary)",
        primary: "var(--primary)",
        "primary-button": "var(--primary-button)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        my_bg_image: "url('../public/landing.png')",
      },
      fontFamily: {
        "base-bold": "var(--base-bold-font-family)",
        "base-medium": "var(--base-medium-font-family)",
        "base-semibold": "var(--base-semibold-font-family)",
        "body-medium": "var(--body-medium-font-family)",
        "body-regular": "var(--body-regular-font-family)",
        "body-semibold": "var(--body-semibold-font-family)",
        "extra-small": "var(--extra-small-font-family)",
        "h1-bold": "var(--h1-bold-font-family)",
        "h2-bold": "var(--h2-bold-font-family)",
        "h2-semibold": "var(--h2-semibold-font-family)",
        "h3-bold": "var(--h3-bold-font-family)",
        "h3-semibold": "var(--h3-semibold-font-family)",
        "paragraph-medium": "var(--paragraph-medium-font-family)",
        "paragraph-regular": "var(--paragraph-regular-font-family)",
        "paragraph-semibold": "var(--paragraph-semibold-font-family)",
        "small-medium": "var(--small-medium-font-family)",
        "small-regular": "var(--small-regular-font-family)",
        "small-semibold": "var(--small-semibold-font-family)",
        "subtle-medium": "var(--subtle-medium-font-family)",
        "subtle-regular": "var(--subtle-regular-font-family)",
        "subtle-semibold": "var(--subtle-semibold-font-family)",
      },
    },
  },
  plugins: [],
};
export default config;
