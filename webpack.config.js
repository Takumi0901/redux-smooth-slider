var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
module.exports = {
  entry: [
    './src/index.js',
    './src/assets/sass/app.scss'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new ExtractTextPlugin('app.css')
  ],
  devServer: {
    contentBase: 'public'
  }
}