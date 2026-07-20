/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        base: {
          50: "#f8fafc",
          100: "#e2e8f0",
          900: "#0b1020",
          950: "#050816",
        },
        accent: {
          1: "#38bdf8",
          2: "#22c55e",
          3: "#f97316",
          4: "#a855f7",
        },
      },
      boxShadow: {
        glass: "0 20px 60px rgba(15, 23, 42, 0.35)",
        soft: "0 10px 30px rgba(14, 165, 233, 0.18)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(36px, -26px) scale(1.08)" },
          "66%": { transform: "translate(-24px, 22px) scale(0.94)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(56, 189, 248, 0.0)" },
          "50%": { boxShadow: "0 0 36px rgba(56, 189, 248, 0.35)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
