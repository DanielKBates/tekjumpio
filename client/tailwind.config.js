module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        animateWave: {
          "0%": {
            transform: "scale(1, 0)"
          },
          "100%": {
            transform: "scale(1, 1)"
          }
        },
        wiggle: {
          '0%, 50%': { transform: 'rotate(0deg)', opacity: "0" },
          '100%': { transform: 'rotate(12deg)', opacity: "1" },
        },
        displayWaveText: {
          "0%": {opacity:"0"},
          "100%": {opacity:"1"}
        }
      },
      animation: {
        animateWave: "animateWave 2s ease-in",
        wiggle: "wiggle 5s ease-in",
        displayWaveText: "displayWaveText 2s ease-in"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
