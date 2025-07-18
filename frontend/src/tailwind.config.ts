import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ebf2fa",
        primary: "#427aa1",
        dark: "#064789",
      },
    },
  },
  plugins: [],
};

export default config;
