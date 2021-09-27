
const webpack = require('webpack')
// 清除构建目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const config = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = merge(baseConfig, config)
