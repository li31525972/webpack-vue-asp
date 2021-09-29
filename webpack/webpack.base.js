/**
 * 基础配置
 */
'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 解析.vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]_[chunkhash:8].js',
    },
    resolve: {
        extensions: ['*', '.js', '.vue']
    },
    module: {
        rules: [
            // babel-loader 解析js
            {
                test: /.js$/,
                use: ['babel-loader']
            },
            // vue-loader 解析 .vue 文件
            {
                test: /.vue$/,
                use: ['vue-loader']
            },
            //
            {
                test: /.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
                // use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            /**
             * file-loader 解析 js引入图片、字体
             *      import logo from './images/logo.png'
             */
            {
                test: /.(png|jpeg|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images',
                            esModule: false
                        }
                    }
                ]
            },
            // 解析字体
            // {
            //     test: /.(woff|svg|eot|ttf|otf)$/i,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 outputPath: 'fonts',
            //                 esModule: false
            //             }
            //         }
            //         // {
            //         //     loader: 'url-loader',
            //         //     options: {
            //         //         limit: 8192
            //         //     }
            //         // }
            //     ]
            // }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[contenthash:8].css'
        })
    ]
}
