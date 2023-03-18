const configBase = require('./build/webpack.base');
const { merge } = require('webpack-merge');

const configDev = {
  mode: 'development',
  //   devtool: '',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
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
