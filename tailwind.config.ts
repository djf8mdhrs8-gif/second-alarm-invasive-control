import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1929",
          50: "#E8EDF2",
          100: "#C7D4E0",
          200: "#9FB3C8",
          300: "#7291AF",
          400: "#4C7096",
          500: "#2D4F6E",
          600: "#1B3550",
          700: "#122740",
          800: "#0D1E33",
          900: "#0A1929",
          950: "#060F19",
        },
        coastal: {
          DEFAULT: "#0F6B4C",
          50: "#E7F5EE",
          100: "#C4E7D6",
          200: "#96D4B6",
          300: "#63BE93",
          400: "#37A876",
          500: "#1C8A5C",
          600: "#0F6B4C",
          700: "#0C5540",
          800: "#0A4233",
          900: "#07332A",
          950: "#04211B",
        },
        gold: {
          DEFAULT: "#C9A24B",
          50: "#FBF6EB",
          100: "#F5E9CC",
          200: "#EAD49B",
          300: "#DEBE6E",
          400: "#D3AD52",
          500: "#C9A24B",
          600: "#AD8637",
          700: "#87672B",
          800: "#614A1F",
          900: "#3E2F14",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "slow-pan": {
          "0%": { transform: "scale(1.05) translate(0,0)" },
          "100%": { transform: "scale(1.15) translate(-1%, -1%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        ripple: "ripple 2.5s cubic-bezier(0.16,1,0.3,1) infinite",
        "slow-pan": "slow-pan 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
