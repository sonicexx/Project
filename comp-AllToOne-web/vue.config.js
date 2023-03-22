const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    config.plugins.forEach(val => {
      if (val instanceof HtmlWebpackPlugin) {
        // console.log(val);
        val.userOptions.template = resolve(__dirname, './src/index.html');
        val.userOptions.title = '一线通';
      }
    });
    // console.log(config.resolve);
    config.resolve.alias = {
      '@': resolve(__dirname, './src'),
      styles: resolve(__dirname, './src/assets/styles'),
      js: resolve(__dirname, './src/assets/js'),
      data: resolve(__dirname, './src/assets/data'),
      components: resolve(__dirname, './src/components'),
      utils: resolve(__dirname, './src/utils'),
      views: resolve(__dirname, './src/views'),
      models: resolve(__dirname, './src/models'),
    };
  },

  // publicPath: './',
};
