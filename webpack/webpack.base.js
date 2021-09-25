/**
 * 基础配置
 */
'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 解析.vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]_[hash:8].js'
    },
    resolve: {
        extensions: ['*', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        })
    ]
}