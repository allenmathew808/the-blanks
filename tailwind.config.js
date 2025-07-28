/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1d20',
        },
        taupe: {
          50: '#faf9f8',
          100: '#f5f3f1',
          200: '#e8e4e0',
          300: '#d6cfc8',
          400: '#b8a99c',
          500: '#9a8b7e',
          600: '#7a6d61',
          700: '#5f544a',
          800: '#4a4139',
          900: '#3d352f',
        },
        'off-white': '#fafafa',
      },
      fontFamily: {
        'logo': ['Architects Daughter', 'cursive'],
        'decorative': ['Delicious Handrawn', 'cursive'],
        'body': ['Darker Grotesque', 'sans-serif'],
        'sans': ['Darker Grotesque', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
} 