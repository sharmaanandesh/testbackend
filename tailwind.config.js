module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_4c": "#0000004c", "900_33": "#00000033" },
        gray: {
          100: "#f3f3f3",
          500: "#a3a3a3",
          700: "#62676d",
          800: "#3c3f44",
          900: "#1f2024",
          "900_99": "#1f202499",
        },
        blue_gray: { 100: "#d7d8dc", 400: "#8b8f98", 900: "#313236" },
        indigo: { A100: "#8779ff" },
        deep_purple: {
          A200_7e: "#7a6aff7e",
          A200: "#5e4bfa",
          A200_01: "#7a6aff",
        },
        purple: { "500_7e": "#9721ce7e" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs1: "0px 1px  4px 0px #0000004c",
        bs: "0px 4px  24px 0px #00000033",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff,#f3f3f3,#a3a3a3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
