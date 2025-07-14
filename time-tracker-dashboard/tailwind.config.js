module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {
      colors: {
        orange: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
      boxShadow: {
        '3xl': '0 10px 15px -3px rgba(249, 115, 22, 0.5), 0 4px 6px -2px rgba(249, 115, 22, 0.3)',
      },
      textShadow: {
        'orange-glow': '0 0 8px #F97316',
      },
    },
  },
  plugins: [],
}
