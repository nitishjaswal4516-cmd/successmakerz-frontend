/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF2FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#1A56A0',
          700: '#1E3A6E',
          800: '#1A2F5A',
          900: '#0F1F3D',
        },
        accent: '#F59E0B',
      },
      fontFamily: {
        display: ['Merriweather', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
