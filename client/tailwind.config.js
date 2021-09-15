module.exports = {
  purge: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      "96":".96",
      "99": ".99",
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    },

    extend: {
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        blue: "20px 10px 0px 0 rgba(0,181, 204, 1)",
        yellow: "20px 10px 0px 0 rgba(250, 216, 89, 1)",
        red: "20px 10px 0px 0 rgba(240, 52, 52, 1)",
        green: "20px 10px 0px 0 rgba(123, 239, 178, 1)",
        purple: "20px 10px 0px 0 rgba(196, 181, 253, 1)",
        none: "none",
      },

      zIndex: {
        "-10": "-10",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDelay: {
          "0%, 50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(15vh)" },
          "100%": { opacity: "1" }
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
        fadeIn: "fadeIn 1s ease-in",
        fadeInDelay: "fadeInDelay 2s ease-in",
        fadeUp: "fadeUp 1s ease-in",
        animateGradient: "animateGradient 15s ease-in infinite",
      },
      colors: {
        "gradient-salmon": "#ee7752",
        "gradient-pink": "#e73c7e",
        "gradient-blue": "#23a6d5",
        "gradient-green": "#23d5ab",
        "light-blue-500": "rgba(14,165,233,var(--tw-bg-opacity))",
      },
      transitionDuration: {
        0: "0ms",
        1200: "1200ms",
        1400: "1400ms",
        1600: "1600ms",
        1800: "1800ms",
        2000: "2000ms",
      },
    },
  },
  backgroundImage: (theme) => ({
    "hero-pattern": "url('client/src/pages/video.mp4')",
    "footer-texture": "url('/img/footer-texture.png')",
  }),

  variants: {
    extend: {
      animation: ["motion-safe", "motion-reduce"],
      backgroundColor: ["active"],
      transform: ["hover", "focus"],
      scale: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
