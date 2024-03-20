import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-regular": ["Helvetica Regular", "sans-serif"],
      },
      colors: {
        primary: "#244B54",
        secondary: "#978282",
        "grayish-dark": "#262626",
        "grayish-light": "#f4f4f4",
      },
      backgroundImage: {
        "intro-background-mobile":
          "url(/assets/backgrounds/background-intro-mobile.webp)",
        "intro-background": "url(/assets/backgrounds/background-intro.webp)",
        "about-us-background":
          "url(/assets/backgrounds/background-about-us.webp)",
        "incubated-background-mobile":
          "url(/assets/backgrounds/background-incubated-mobile.webp)",
        "incubated-background":
          "url(/assets/backgrounds/background-incubated.webp)",
        "contact-background-mobile":
          "url(/assets/backgrounds/background-contact-mobile.webp)",
        "contact-background":
          "url(/assets/backgrounds/background-contact.webp)",
      },
      screens: {
        dt: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
