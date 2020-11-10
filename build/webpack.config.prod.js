const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConf = require('./webpack.config.base.js');
const fs = require('fs')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const plugins = [
  new webpack.ContextReplacementPlugin(
    /moment[/\\]locale$/,
    /zh-ch/
  )
];

if (process.env.npm_config_report) {
  plugins.push(new BundleAnalyzerPlugin());
}
module.exports = merge(baseConf, {
  mode: 'production',
  plugins
});