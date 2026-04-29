/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#061A3A",
          neon: "#007BFF",
          orange: "#FF5A00",
          yellow: "#FFD400",
          black: "#050505",
        },
      },
      fontFamily: {
        display: ["'Sora'", "'Inter'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,123,255,0.45)",
        "glow-orange": "0 0 40px rgba(255,90,0,0.45)",
        "glow-yellow": "0 0 40px rgba(255,212,0,0.45)",
        "card": "0 20px 60px -10px rgba(0,0,0,0.6)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        "gradient": "gradientShift 8s ease infinite",
        "shine": "shine 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(0,123,255,0.6)" },
          "50%": { boxShadow: "0 0 30px 10px rgba(0,123,255,0)" },
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(0,123,255,0.25), transparent 60%), radial-gradient(ellipse at bottom right, rgba(255,90,0,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
}
