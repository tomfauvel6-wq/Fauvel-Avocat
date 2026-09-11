import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071A33",
        ivory: "#F4F1EA",
        gold: "#B79A62",
        "gold-ink": "#806C45",
        bone: "#E8DCC4",
        ocre: "#C9A961",
        stone: "#D9D5CD",
        ink: "#111827"
      }
    }
  },
  plugins: []
};

export default config;
