'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = 'development';

module.exports = {
    watch: true,
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
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
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: '../images'
                }  
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html'
        }),
        new ExtractTextPlugin('css/style.css'),
        new webpack.DefinePlugin(env)
    ]
}