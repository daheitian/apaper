const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const isProductionMode = process.env.NODE_ENV === 'production';

// Declare export for PostCss processing
module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    postcssNested,
    autoprefixer,

    // Only minify for production
    ...(isProductionMode
      ? [
        cssnano({
          preset: 'default',
        }),
      ]
      : []),
  ],
};
