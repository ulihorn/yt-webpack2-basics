const path = require('path');
//const webpack = require('webpack');
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src', 'js', 'app'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /.css$/,
        include: [
          path.resolve(__dirname, 'src', 'css')
        ],
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    new uglifyJsPlugin({
      sourceMap: true
    })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};