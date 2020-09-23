const palette = require('@ky-is/tailwind-color-palette');
const defaultTheme = require('tailwindcss/defaultTheme');

const brand = '#ED213A';
const brandAlt = '#f5af19';

const brandShades = palette(brand, {
  name: 'brand',
  greyscale: false,
  ui: false
});

const brandAltShades = palette(brandAlt, {
  name: 'brandAlt',
  greyscale: false,
  ui: false
});

module.exports = {
  purge: [
    './src/components/**/*.js',
    './src/containers/**/*.js',
    './src/pages/**/*.js'
  ],

  important: true,
  theme: {
    extend: {
      colors: {
        ...brandShades,
        ...brandAltShades
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        head: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Crimson Text', ...defaultTheme.fontFamily.sans],
        arabic: ['Tajawal', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      }
    }
  }
};
