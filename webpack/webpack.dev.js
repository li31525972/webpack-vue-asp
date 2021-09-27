
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    mode: 'development',
    devServer: {
        hot: true,
        // open: true
    },
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin({
            // 每次编译之前删除控制台
            clearConsole: true,
            compilationSuccessInfo: {
                message: (data) => {
                    console.log(data);
                    return []
                }
            }
        })
    ],
    // stats: 'errors-only',
    performance: {
        hints: 'error',
        maxEntrypointSize: 2000000,
        maxAssetSize: 1000000,
    }
}

module.exports = merge(baseConfig, config)
