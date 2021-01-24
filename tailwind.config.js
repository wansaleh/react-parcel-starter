const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/components/**/*.js',
    './src/containers/**/*.js',
    './src/pages/**/*.js'
  ],

  important: true,
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        head: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Crimson Text', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', 'monospace']
      }
    }
  }
};
