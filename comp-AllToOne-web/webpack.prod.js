const configBase = require('./build/webpack.base');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const configProd = {
  mode: 'production',
  devtool: 'nosources-source-map',
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  performance: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          //   'vue-style-loader',
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
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 6 * 1024,
          name: 'static/imgs/[name]_[contenthash:4].[ext]',
          esModule: false,
        },
        type: 'javascript/auto',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|TTF|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]',
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:4].css',
    }),
  ],
};

module.exports = merge(configBase, configProd);
