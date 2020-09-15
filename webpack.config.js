const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
        new NodemonPlugin({
            'script': './dist/server.js'
        }),
    ]
};