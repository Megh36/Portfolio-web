/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-red': '#ff003c',
        'accent-blue': '#00e0ff',
        'accent-gold': '#ffe81f',
      },
      animation: {
        'scan-line': 'scan-line 4s linear infinite',
      },
      keyframes: {
        'scan-line': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(400px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
