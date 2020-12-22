const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }, {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "seaside_cottage",
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
}