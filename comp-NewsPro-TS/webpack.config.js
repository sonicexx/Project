const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolve } = require('path');

module.exports = {
  // mode: 'development',
  mode: 'production',
  devtool: 'nosources-source-map',
  // devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    // host: '192.168.1.100',
    port: 8090,
  },
  entry: {
    index: './src/ts/index.ts',
    detail: './src/ts/detail.ts',
    collections: './src/ts/collections.ts',
  },
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'dist/'),
  },
  resolve: {
    extensions: ['.js', '.cjs', '.ts', '.jsx'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /.tpl$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        type: 'javascript/auto',
        options: {
          limit: 8 * 1024,
          name: 'static/imgs/[name]_[contenthash:4].[ext]',
          esModule: false,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|ttf|woff2?|svg|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name].[ext]',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: '新闻头条',
      chunks: ['index'],
      chunksSortMode: 'manual',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/detail.html',
      filename: 'detail.html',
      title: '新闻详情',
      chunks: ['detail'],
      chunksSortMode: 'manual',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/collections.html',
      filename: 'collections.html',
      title: '我的收藏',
      chunks: ['collections'],
      chunksSortMode: 'manual',
      favicon: resolve(__dirname, './src/assets/img/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  optimization: {
    usedExports: true,
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
};
