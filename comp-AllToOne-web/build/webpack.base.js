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
      {
        test: /\.(woff2?|eot|ttf|otf|ico|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]',
        },
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
  // prettier-ignore
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve(__dirname, '../src'),
      "styles": resolve(__dirname, '../src/assets/styles'),
      "js": resolve(__dirname, '../src/assets/js'),
      "data": resolve(__dirname, '../src/assets/data'),
      "components": resolve(__dirname, '../src/components'),
      "utils": resolve(__dirname, '../src/utils'),
      "views": resolve(__dirname, '../src/views'),
      "models": resolve(__dirname, '../src/models'),
    },
  },
  optimization: {
    usedExports: true,
  },
};

module.exports = configBase;
