module.exports = {
  purge: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    stroke: {
      stroke: (theme) => ({
        grey: theme("colors.grey.800"),
      })
    },
    extend: {
      keyframes: {
        animateWave: {
          "0%": {
            transform: "scale(1, 0)",
          },
          "100%": {
            transform: "scale(1, 1)",
          },
        },
        wiggle: {
          "0%, 50%": { transform: "rotate(0deg)", opacity: "0" },
          "100%": { transform: "rotate(12deg)", opacity: "1" },
        },
        displayWaveText: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        animateGradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        animateWave: "animateWave 2s ease-in",
        wiggle: "wiggle 3s ease-in",
        displayWaveText: "displayWaveText 2s ease-in",
        animateGradient: "animateGradient 15s ease-in ",
      },
      colors: {
        "gradient-salmon": "#ee7752",
        "gradient-pink": "#e73c7e",
        "gradient-blue": "#23a6d5",
        "gradient-green": "#23d5ab",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
