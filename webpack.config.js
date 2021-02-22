const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = './dist';

module.exports = {
  mode: 'development',
  entry: {
    main: './src',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Crowd Sokoban",
      chunks: ['main']
    }),
  ]
};

