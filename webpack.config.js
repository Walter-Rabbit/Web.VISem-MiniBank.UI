// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './public/src/imports/imports.js',
  output: {
    iife: false,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/src/imports'),
  },
  optimization: {
    sideEffects: false,
    minimize: false,
  },
};
