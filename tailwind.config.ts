import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'main-bg-color': 'var(--main-background)',
      'table-header-color': 'var(--table-header)',
      'table-hover': 'var(--common-hover)',
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.scroll-bar-2': {},
        '.scroll-bar-height-4': {},
        '.scroll-bar-3': {},
        '.main-container': {},
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
