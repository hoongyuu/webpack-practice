const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function () {
  return {
    mode: 'production',
    entry: {
      index: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[hash:8].css",
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            { loader: MiniCssExtractPlugin.loader }, 
            { loader: 'css-loader' }, 
            { loader: 'postcss-loader' }
          ]
        }
      ]
    }
  }
}