/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: {
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
    extend: {
      // You can add custom colors, animations, etc. here
      colors: {
        "dag-purple": "#7e3ff2", // sample brand color

        neon: "var(--neon)",
        "neon-from": "var(--neon-from)",
        "neon-via": "var(--neon-via)",
        "neon-to": "var(--neon-to)",
        card: "var(--card)",
        bg: "var(--bg)",
        fg: "var(--fg)",
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
