const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const webpack = require('webpack');
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");

// var extractPlugin = new ExtractTextPlugin({
//   filename: 'main.css'
// });

module.exports = {
  entry: path.join(__dirname, 'src', 'js', 'app1'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        include: [
          path.resolve(__dirname, 'src', 'js')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              //publicPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'users.html',
      template: 'src/users.html',
      chunks: []
    }),
    //new webpack.optimize.UglifyJsPlugin({
    new uglifyJsPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin("main.css")
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
  //devServer: {
  //  publicPath: path.join('./')
  //}
};