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
        header10:'LEMON',
        header11:'HOUSE',
        header12:'SATOSHI'
        // 'NUE'
      },
      animation: {
        "slideDown": "fadeSlideDown .4s ease-in-out",
        "slideAcross": "fadeLeftToRight 2s ease-in-out infinite",
        "slideAcrossLg": "fadeLeftToRightLg 2s ease-in-out infinite",
        "slideAcrossMd": "fadeLeftToRightMd 2s ease-in-out infinite",
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
        "fadeLeftToRight": {
          "0%": { transform: "translateX(0)",
          opacity: '0%'
          },
          "100%": {   transform: "translateX(-350px)" ,
          opacity: '60%'
          },
        },
        "fadeLeftToRightMd": {
          "0%": { transform: "translateX(0)",
          opacity: '0%'
          },
          "100%": {   transform: "translateX(-450px)" ,
          opacity: '60%'
          },
        },
        "fadeLeftToRightLg": {
          "0%": { transform: "translateX(0)",
          opacity: '0%'
          },
          "100%": {   transform: "translateX(-650px)" ,
          opacity: '60%'
          },
        }
        
      }),
    },
  },
  plugins: [],
}
