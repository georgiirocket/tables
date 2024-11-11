import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.full-screen': {},
        '.table-search-wrapper': {},
        '.table-navigate': {},
        '.table-column-toggle-body': {},
        '.table-column-toggle-buttons': {},
        '.table-header': {},
        '.table-header-group': {},
        '.table-header-cell': {},
        '.table-header-numeral': {},
        '.table-header-total-cell': {},
        '.scroll-bar-2': {},
      });
    }),
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#0f0f11',
          },
        },
      },
    }),
  ],
};
export default config;
