'use strict';

// intall
// npm install webpack --save-dev
// npm install webpack-cli -D
// npm init
// add scripts to package.json build: 'webpack'
// npm install --save-dev html-webpack-plugin
// npm install --save-dev clean-webpack-plugin
// npm install --save-dev uglifyjs-webpack-plugin
// npm install --save-dev babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
// npm install style-loader css-loader sass-loader node-sass extract-text-webpack-plugin -D
// npm install --save-dev url-loader
// npm install --save-dev file-loader

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const env = 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/build.js'
    },
    module: {
        rules: [{
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
                use: [{ 
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'sass-loader'
                }]
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
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: './public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'results.html',
            template: './public/results.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'teleworking.html',
            template: './public/teleworking.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new ExtractTextPlugin('css/style.css'),
        new webpack.DefinePlugin(env),
        new UglifyJSPlugin()
    ]
}