const path = require('path')
const { merge } = require('webpack-merge');
const baseConf = require('./webpack.config.base.js');
module.exports = merge(baseConf, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true
  }
});