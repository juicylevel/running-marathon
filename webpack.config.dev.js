'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = 'development';

module.exports = {
    watch: true,
    devtool: 'cheap-module-source-map',
    entry: {
        index: './src/index.js',
        results: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './js/build.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            include: /src/,
            loader: 'eslint-loader'
        }, {
            test: /\.js$/,
            include: /src/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: './images/',
                    publicPath: '../images'
                }  
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: './public/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'results.html',
            template: './public/results.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'teleworking.html',
            template: './public/teleworking.html'
        }),
        new ExtractTextPlugin('css/style.css'),
        new webpack.DefinePlugin(env)
    ]
}