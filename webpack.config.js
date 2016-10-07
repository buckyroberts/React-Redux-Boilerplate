var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	devtool: 'cheap-module-eval-source-map',
	entry: './src/js/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	output: {
		path: 'dist',
		filename: 'js/bundle.min.js'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.ejs',
			appMountId: 'root'
		})
	]
};
