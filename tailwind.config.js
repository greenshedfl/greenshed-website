/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Logo-inspired greens with supporting neutrals and warm accent
        primary: {
          DEFAULT: '#2f6b4a',
          600: '#285c41',
          700: '#234f37',
        },
        secondary: '#196655',
        header: '#f2fcf5',
        'title-primary': '#2f6b4a',
        card: '#629f7b',
        body: '#e8ede1',
        'alt-text': '#00a762',
        neutral: {
          DEFAULT: '#111827',
          300: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
      },
    },
  },
  plugins: [],
};
