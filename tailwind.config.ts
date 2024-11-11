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
  theme: {
    colors: {
      'main-bg-color': 'var(--main-background)',
      'table-header-color': 'var(--table-header)',
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.scroll-bar-2': {},
        '.scroll-bar-height-4': {},
        '.scroll-bar-3': {},
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
