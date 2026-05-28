import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Verde escuro (cor principal — vem do logo)
        forest: {
          950: "#08200f",
          900: "#0e3a1c",
          800: "#13502a",
          700: "#196635",
          600: "#1f7c41",
          500: "#26934d",
          400: "#3eab64",
          300: "#6cc488",
        },
        // Terracota / telha (accent — vem do logo)
        terracotta: {
          900: "#5a1f0a",
          800: "#7a2c10",
          700: "#9a3a17",
          600: "#b9481e",
          500: "#c8521a",
          400: "#d56a35",
          300: "#e08a5e",
          200: "#ecb094",
          100: "#f6dccb",
        },
        ink: {
          900: "#1b1b1e",
          700: "#303033",
          500: "#44474e",
          400: "#74777f",
          300: "#9ea1a8",
        },
        line: {
          DEFAULT: "#e5e2dc",
          muted: "#cdc9c1",
        },
        surface: {
          DEFAULT: "#ffffff",
          tint: "#faf8f4",
          muted: "#f3efe8",
          ring: "#ece8e0",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.5rem, 5vw + 0.5rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.25rem, 4vw + 1rem, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(1.875rem, 2.5vw + 1rem, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        "label-wide": "0.18em",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14, 58, 28, 0.06)",
        card: "0 18px 40px -20px rgba(14, 58, 28, 0.22), 0 4px 12px -4px rgba(14, 58, 28, 0.10)",
        "card-hover": "0 32px 60px -24px rgba(14, 58, 28, 0.32), 0 6px 18px -6px rgba(14, 58, 28, 0.16)",
        ring: "inset 0 0 0 1px rgba(205, 201, 193, 0.6)",
      },
      backgroundImage: {
        "forest-gradient": "linear-gradient(135deg, #08200f 0%, #0e3a1c 50%, #196635 100%)",
        "terracotta-gradient": "linear-gradient(135deg, #c8521a 0%, #d56a35 100%)",
        "forest-radial": "radial-gradient(ellipse at top right, rgba(108, 196, 136, 0.18), transparent 60%)",
        "subtle-noise": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) forwards",
        "shimmer": "shimmer 6s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
