const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
    ]
  },
    ]
},
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}

module.exports = config;