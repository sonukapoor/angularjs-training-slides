var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './main.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  externals: {
    'reveal': 'Reveal'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: ['file-loader'],
      exclude: /node_modules/,
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      { from: { glob: 'content/*.md' } },
      { from: { glob: 'content/images/*' } }
    ])
  ],
  devServer: {
    noInfo: true,
    port: 8081
  }
};
