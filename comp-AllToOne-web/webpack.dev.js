const configBase = require('./build/webpack.base');
const { merge } = require('webpack-merge');

const configDev = {
  mode: 'development',
  //   devtool: '',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true, // history 模式下，返回/刷新页面找不到
    // 这个配置相当于，找不到地址时，导航到主页
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = merge(configBase, configDev);
