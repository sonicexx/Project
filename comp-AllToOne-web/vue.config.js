const { resolve } = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        styles: resolve(__dirname, './src/assets/styles'),
        js: resolve(__dirname, './src/assets/js'),
        data: resolve(__dirname, './src/assets/data'),
        components: resolve(__dirname, './src/components'),
        utils: resolve(__dirname, './src/utils'),
        views: resolve(__dirname, './src/views'),
      },
    },
  },
};
