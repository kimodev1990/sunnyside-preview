/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {
      colors: {
        "Softy-red": "hsl(7, 99%, 70%)",
        "Yellow-color": "hsl(51, 100%, 49%)",
        "Dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "Dark-blue": "hsl(198, 62%, 26%)",
        "Dark-moderate-cyan": "hsl(168, 34%, 41%)",
      },
    },
  },
  plugins: [],
};
