'use strict';

// intall
// npm install webpack --save-dev
// npm install webpack-cli -D
// npm init
// add scripts to package.json build: 'webpack'
// npm install --save-dev html-webpack-plugin
// npm install --save-dev clean-webpack-plugin
// npm install --save-dev uglifyjs-webpack-plugin
// npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
// npm install webpack-contrib/html-webpack-plugin -D -> fix dependency bug

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV || 'production';

module.exports = {
	mode: env,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
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
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			inject: true,
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
		new webpack.DefinePlugin(env),
		new UglifyJSPlugin()
	]
}