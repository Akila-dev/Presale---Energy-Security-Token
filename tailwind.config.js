/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: {
      0: "0em",
      1: "0.5em",
      2: "1em",
      3: "1.5em",
      4: "2em",
      5: "2.5em",
      6: "3em",
      7: "3.5em",
      8: "4em",
      9: "4.5em",
      10: "5em",
    },
    borderRadius: {
      none: "0",
      sm: "0.5em",
      DEFAULT: "1em",
      md: "1.5em",
      lg: "2em",
      full: "50%",
    },
    extend: {
      // You can add custom colors, animations, etc. here
      colors: {
        "dag-purple": "#7e3ff2", // sample brand color

        neon: "#39ff14",
        "neon-from": "#adff2f",
        "neon-via": "#39ff14",
        "neon-to": "#00ff00",
        card: "#1a1a1a",
        dark: "#0a0a0a",
        bg: "#000000",
        fg: "#dedede",
      },
      fontFamily: {
        base: "var(--font-base)",
        display: "var(--font-display)",
      },
      boxShadow: {
        "neon-shadow": "0 0 10px rgba(144, 115, 255, 0.8)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
