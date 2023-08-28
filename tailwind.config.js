/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bodyBG: 'rgb(var(--body-bg)/<alpha-value>)',
        appBG: 'rgb(var(--app-bg)/<alpha-value>)',
        textColorOne: 'rgb(var(--text-color-one)/<alpha-value>)',
        textColorTwo: 'rgb(var(--text-color-two)/<alpha-value>)',
        textColorThree: 'rgb(var(--text-color-three)/<alpha-value>)',
        themeToggleHoverColor:
          'rgb(var(--theme-toggle-hover-color)/<alpha-value>)',
        '--shadow': '[0_3px_10px_rgb(0,0,0,0.2)]',
        textError: '#f74646',
        bgButtonSearch: '#0079ff',
        hoverButtonSearch: '#60abff',
        textLink: '#0097ff',
      },
    },
  },

  plugins: [],
};
