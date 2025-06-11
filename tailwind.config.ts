import type {Config} from "tailwindcss";
import tailwindcss_animate from "tailwindcss-animate";

export default {
  darkMode: "media",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        card: {
          DEFAULT: "var(--background)",
          foreground: "var(--foreground)",
        },
        popover: {
          DEFAULT: "var(--background)",
          foreground: "var(--secondary)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--foreground)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--foreground)",
        },
        error: {
          DEFAULT: "var(--error)",
          foreground: "var(--foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--foreground)",
        },
        overlay: {
          DEFAULT: "var(--overlay)",
          foreground: "var(--foreground)",
        },
        muted: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--foreground)",
        },
        accent: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--background-secondary)",
        },
        destructive: {
          DEFAULT: "var(--primary)",
          foreground: "var(--foreground)",
        },
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--primary)",
          "2": "var(--secondary)",
          "3": "var(--tertiary)",
          "4": "var(--primary)",
          "5": "var(--primary)",
        },
        sidebar: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          "primary-foreground": "var(--foreground)",
          accent: "var(--background-accent)",
          "accent-foreground": "var(--foreground)",
          border: "var(--primary)",
          ring: "var(--primary)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcss_animate],
} satisfies Config;
