/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        // Keep light backgrounds
        paper: '#fafaf7',
        white: '#ffffff',

        // Brand Colors
        'vista-blue': '#92ACFF',
        'blue-oxford': '#0E0929',

        // Semantic Color Mapping
        primary: '#0E0929',      // Blue Oxford - primary backgrounds, text
        secondary: '#92ACFF',    // Vista Blue - secondary buttons, accents
        accent: '#92ACFF',       // Vista Blue - highlights, links
        ink: '#0E0929',          // Blue Oxford - main text

        // Additional shades for flexibility
        'vista-blue': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7ff',
          300: '#a5bbff',
          400: '#92ACFF', // Main Vista Blue
          500: '#6b8cff',
          600: '#4c6eff',
          700: '#3d5aff',
          800: '#324dcc',
          900: '#2e459e',
        },
        'blue-oxford': {
          50: '#f4f4f7',
          100: '#e8e8ef',
          200: '#d5d5e2',
          300: '#b8b8cf',
          400: '#9595b8',
          500: '#7a7aa3',
          600: '#686890',
          700: '#5b5b7e',
          800: '#4d4d6a',
          900: '#424258',
          950: '#0E0929', // Main Blue Oxford
        },
      },
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [],
}
