const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MODE = 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
              sourceMap: MODE === 'development',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|webp)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  mode: MODE,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ExtractTextPlugin('dist/styles/main.css', {
      allChunks: true,
    }),
    new MiniCssExtractPlugin({
      filename: MODE === 'development' ? '[name].css' : '[name].[hash].css',
      chunkFilename: MODE === 'development' ? '[id].css' : '[id].[hash].css',
    }),
  ],
};
