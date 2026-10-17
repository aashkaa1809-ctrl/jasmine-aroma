import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        foreground: "#171717",
        primary: {
          white: "#FFFFFF",
          cream: "#FAF8F5",
          sand: "#F4F0E8",
          linen: "#EFEBE3",
          wine: "#6B0B23",
          wineMuted: "#881B36",
          charcoal: "#262626",
          black: "#111111",
        },
        luxury: {
          lightGrey: "#F7F5F0",
          mediumGrey: "#E5E0D8",
          border: "#E8E3DA",
          textGrey: "#5C554E",
          textMuted: "#8A8279",
          ivory: "#FAF8F5",
          warmSand: "#F5EFEB",
          gold: "#A8834E",
          goldMuted: "#916E3B",
          sage: "#748666",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        editorial: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".35em",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
