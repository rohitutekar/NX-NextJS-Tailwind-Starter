const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#000',
          light: '#D9D9D9',
          dark: '#817D7D',
        },
        primary: {
          DEFAULT: '#3949ab',
          light: '#9fa8da',
          dark: '#1a237e',
        },
        secondary: {
          DEFAULT: '#607d8b',
          light: '#b0bec5',
          dark: '#37474f',
        },
        success: {
          DEFAULT: '#009688',
          light: '#b2dfdb',
          dark: '#00695c',
        },
        danger: {
          DEFAULT: '#f44336',
          light: '#ffcdd2',
          dark: '#c62828',
        },
        warning: {
          DEFAULT: '#ff9800',
          light: '#ffe0b2',
          dark: '#ef6c00',
        },
      },
    },
  },
  plugins: [],
};
