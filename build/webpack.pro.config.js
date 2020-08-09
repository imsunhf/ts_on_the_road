/*
 * @Author: your name
 * @Date: 2020-08-09 08:50:53
 * @LastEditTime: 2020-08-09 09:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts_in_action/build/webpack.pro.config.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  plugins: [new CleanWebpackPlugin()],
}
