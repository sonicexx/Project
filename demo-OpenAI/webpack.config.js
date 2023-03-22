const { config } = require('dotenv');
config();

const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      // url: 'https://api.openai-proxy.com/v1/chat/completions',
      '/api/v1': {
        target: 'https://api.openai-proxy.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: 'js/main_[contenthash:4].js',
    path: resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          //   'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ['> 1%', 'last 2 versions'],
                  }),
                ],
              },
            },
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        loader: 'url-loader',
        type: 'javascript/auto',
        options: {
          limit: 5 * 1024,
          name: 'static/imgs/[name]_[contenthash:4].[ext]',
          esModule: false,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name]_[contenthash:4].[ext]',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:4].css',
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      title: process.env.TITLE_MAIN,
      chunks: ['main'],
      chunksSortMode: 'manual',
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {},
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  optimization: {
    usedExports: true,
  },
};
