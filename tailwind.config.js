/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        light: {
          primary: '#3B4D8D',
          secondary: '#DCE4FF',
          accent: '#E137D0',
          neutral: '#FFFFFF',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      {
        dark: {
          primary: '#3B4D8D',
          secondary: '#DCE4FF',
          accent: '#E137D0',
          neutral: '#141724',
          'base-100': '#000000',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};
