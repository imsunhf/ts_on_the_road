/*
 * @Author: your name
 * @Date: 2020-08-09 08:50:31
 * @LastEditTime: 2020-08-09 09:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings
 * @FilePath: /ts_in_action/build/webpack.base.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.ts', 'tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html',
    }),
  ],
}
