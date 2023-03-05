const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  // 模式
  mode: 'development',

  // source-map
  devtool: 'source-map',

  // 优化 禁止压缩、最小化
  optimization: {
    // usedExports: true,

    minimize: false,

    splitChunks: {
      // chunks: 'all',
    },
  },

  // 配置 devServer
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    open: true,
    port: 3000,
    host: 'localhost',
    hot: true,
  },

  // 配置 plugins
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
    // new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      title: '新闻头条', // 页面 title
      chunks: ['index'], // 匹配 JS 文件
      chunksSortMode: 'manual', // 匹配 JS 文件模式：手动
      excludeChunks: ['node_modules'], //排除解析
      hash: true, //hash
      minify: {
        //压缩
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 移除 空格/换行
      },
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/detail.html'),
      filename: 'detail.html',
      title: '新闻详情', // 页面 title
      chunks: ['detail'], // 匹配 JS 文件
      chunksSortMode: 'manual', // 匹配 JS 文件模式：手动
      excludeChunks: ['node_modules'], //排除解析
      hash: true, //hash
      minify: {
        //压缩
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 移除 空格/换行
      },
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/collections.html'),
      filename: 'collections.html',
      title: '我的新闻', // 页面 title
      chunks: ['collections'], // 匹配 JS 文件
      chunksSortMode: 'manual', // 匹配 JS 文件模式：手动
      excludeChunks: ['node_modules'], //排除解析
      hash: true, //hash
      minify: {
        //压缩
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 移除 空格/换行
      },
    }),
  ],

  // 入口文件 多入口文件
  entry: {
    index: resolve(__dirname, './src/js/index.js'),
    detail: resolve(__dirname, './src/js/detail.js'),
    collections: resolve(__dirname, './src/js/collections.js'),
  },

  // 输出打包
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'js/[name]_[hash:4].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: resolve(__dirname, './node_modules'),
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          // 'style-loader', // 不单独打包 css
          MiniCssExtractPlugin.loader, // 单独打包 css
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico|woff|eot|svg|ttf)$/i,
        loader: 'url-loader',
        options: {
          name: 'imgs/[name]_[hash:8].[ext]',
          limit: 5 * 1024,
        },
      },
    ],
  },
};

module.exports = config;
