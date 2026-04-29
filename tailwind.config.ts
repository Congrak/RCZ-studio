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
        accent: "#c8ff00",
        "accent-dark": "#a8d900",
        "card-bg": "#141412",
        "card-border": "#2a2924",
        "rcz-black": "#0a0a0a",
        "rcz-white": "#f5f2ed",
        "rcz-gray": "#8a8780",
        "rcz-cream": "#ede9e2",
        "gray-light": "#d4d0c8",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
