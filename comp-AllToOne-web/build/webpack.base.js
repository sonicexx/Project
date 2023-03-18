const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const { DefinePlugin } = require('webpack');
const { resolve } = require('path');

const configBase = {
  entry: {
    main: resolve(__dirname, '../src/main.js'),
  },
  output: {
    filename: 'js/main_[contenthash:8].js',
    path: resolve(__dirname, '../dist/'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      title: 'comp-vue',
      chunks: ['main'],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve(__dirname, '../src/'),
    },
  },
  optimization: {
    usedExports: true,
  },
};

module.exports = configBase;
