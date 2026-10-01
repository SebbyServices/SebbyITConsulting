import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light, professional palette built from the logo blue.
        ink: "#0B1B34", // headings, footer/CTA band background
        body: "#334155", // paragraph text
        muted: "#5B6B82", // secondary text (AA on white and surface)
        line: "#E3E8EF", // borders and dividers
        surface: "#F5F7FB", // alternating section background
        brand: {
          DEFAULT: "#1D4ED8",
          dark: "#1E3A8A",
          light: "#EEF3FF",
        },
        accent: "#0F766E", // checkmarks and positive cues
        amber: "#B45309",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 27, 52, 0.04), 0 4px 16px rgba(11, 27, 52, 0.06)",
        lift: "0 2px 4px rgba(11, 27, 52, 0.05), 0 16px 40px rgba(11, 27, 52, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
