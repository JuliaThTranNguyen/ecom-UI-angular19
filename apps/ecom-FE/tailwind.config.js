const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      serif: 'Inter var, ui-sans-serif, system-ui',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.7rem',
      '3xl': '1.95rem',
      '4xl': '2.35rem',
      '5xl': '2.85rem',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: '#0000ff',
          'primary-content': 'white',
          secondary: '#F6F6F6',
          neutral: '#E8E8E8',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root'
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};