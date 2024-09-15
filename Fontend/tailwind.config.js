/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: '1604px',
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        'white': '#FFFFFF',
        'primary': '#262626',
        'secendary': '#767676',
        'headerbg': '#F5F5F3',
      },
    },
  },
  plugins: [],
}

