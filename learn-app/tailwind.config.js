/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header1: 'Chakra Petch',
        header2: 'UPHEAVAL',
        header3: 'ALDO',
        header4: 'PLA',
        header5: 'NEM',
        header6: 'CHA',
        header7:'OBO-B',
        header8:'OBO-L',
        header9:'OBO-N',
        header10:'LEMON'
      },
      animation: {
        "slideDown": "fadeSlideDown .4s ease-in-out",
      },

      keyframes: (theme) => ({
        'fadeOut': {
          "0%": { transform: "translateX(-100%)"},
          "100%": {   transform: "translateX(0)" },
        },
        "fadeSlideDown": {
          "0%": { transform: "translateY(-100%)",
          opacity: '30%'
          },
          "100%": {   transform: "translateY(0)" ,
          opacity: '100%'
          },
        },
        
      }),
    },
  },
  plugins: [],
}
