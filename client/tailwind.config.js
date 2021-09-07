module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      xx: '85vh',
     },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 225, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      blue: '20px 10px 0px 0 rgba(0,181, 204, 1)',
      yellow: '20px 10px 0px 0 rgba(250, 216, 89, 1)',
      red: '20px 10px 0px 0 rgba(240, 52, 52, 1)',
      green: '20px 10px 0px 0 rgba(123, 239, 178, 1)',
      none: 'none',
    },
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
  backgroundImage: theme => ({
    'hero-pattern': "url('client/src/pages/video.mp4')",
    'footer-texture': "url('/img/footer-texture.png')",
   }),

  

  variants: { 
    animation:['motion-safe' , 'motion-reduce'],
   
    extend: { 
   
    transform: ['hover', 'focus'],
    scale: ['responsive', 'hover', 'focus'],
 
  },
  },
  plugins: [],
}
