/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        juma: {
          // Inspirados en el logo: noche jujeña + circuitos
          dark: "#0a0a12",
          darker: "#06060b",
          panel: "#11111c",
          sun: "#fb923c",
          orange: "#f97316",
          red: "#ef4444",
          cyan: "#38bdf8",
          indigo: "#6366f1",
          sand: "#e9d8b8",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "juma-gradient":
          "linear-gradient(135deg, #f97316 0%, #ef4444 45%, #6366f1 100%)",
        "juma-radial":
          "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(249,115,22,0.45)",
        "glow-cyan": "0 0 40px -10px rgba(56,189,248,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
