import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E40AF",
        teal: "#0D9488",
        amber: "#B45309",
        bg: "#0F172A",
        "bg-2": "#1E293B",
        text: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        spotlight: "spotlight 3s ease 0.5s infinite",
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translate(-200%, -200%) scale(2)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
