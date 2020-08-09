/*
 * @Author: your name
 * @Date: 2020-08-09 08:50:39
 * @LastEditTime: 2020-08-09 09:20:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts_in_action/build/webpack.config.js
 */
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')
let config = process.NODE_ENV === 'development' ? devConfig : proConfig
module.exports = merge(baseConfig, config)
