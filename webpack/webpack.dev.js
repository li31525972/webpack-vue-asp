
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const config = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true
    },
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, config)