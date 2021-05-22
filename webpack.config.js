const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http:localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? "style-loader" : { 
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '/build/main.css' },
        },
          "css-loader",
          "sass-loader"],
      },
    ],
  }
};