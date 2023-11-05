/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },

        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)',
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    },
      colors:{
        grey_level_2: '#18191D',
        grey_level_1: '#131417',
      },

      fontFamily: {
        sfpro: ["SFPro", "sans-serif"],
        sflight: ["SFLight", "sans-serif"],
        sfregular: ["SFRegular", "sans-serif"],
      }
    },
  },
  plugins: [],
}

