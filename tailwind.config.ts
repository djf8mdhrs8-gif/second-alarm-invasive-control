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
          DEFAULT: "#17130F",
          50: "#EEECEA",
          100: "#D6D1CB",
          200: "#B6AEA4",
          300: "#948A7E",
          400: "#726A5F",
          500: "#564F46",
          600: "#423C34",
          700: "#322D27",
          800: "#241F1B",
          900: "#17130F",
          950: "#0D0A08",
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
          600: "#9C7830",
          700: "#7A5D26",
          800: "#57421B",
          900: "#392B12",
        },
        ember: {
          DEFAULT: "#A32C1E",
          50: "#FBEAE7",
          100: "#F3C8C0",
          200: "#E79A8A",
          300: "#D96C54",
          400: "#C04A30",
          500: "#A32C1E",
          600: "#841F14",
          700: "#63160E",
          800: "#430E09",
          900: "#290804",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
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
