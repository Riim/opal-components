let path = require('path');
let webpack = require('webpack');
let postcssCSSVariables = require('postcss-css-variables');
let postcssRioniteComponent = require('postcss-rionite-component');
let postcssNested = require('postcss-nested');
let postcssColorFunction = require('postcss-color-function');
let autoprefixer = require('autoprefixer');
let csso = require('postcss-csso');

module.exports = env => {
	if (!env) {
		env = {};
	}

	let plugins = [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	return {
		mode: 'none',

		entry: {
			index: './src/index.ts'
		},

		output: {
			path: path.join(__dirname, 'dist'),
			filename: '[name].js',
			library: '[name]',
			libraryTarget: 'umd'
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /(?:node_modules|bower_components)/,
					enforce: 'pre',
					loader: 'tslint-loader'
				},
				{
					test: /\.ts$/,
					exclude: /(?:node_modules|bower_components)/,
					loader: 'awesome-typescript-loader'
				},
				{
					test: /\.rnt$/,
					loader: ['raw-loader', 'collapse-line-breaks-loader', 'trim-lines-loader']
				},
				{
					test: /\.css$/,
					loader: [
						'simple-css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									postcssCSSVariables(),
									postcssRioniteComponent(),
									postcssNested(),
									postcssColorFunction(),
									autoprefixer({ browsers: ['last 3 versions'] }),
									csso({ restructure: false })
								]
							}
						}
					]
				},
				{
					test: /\.svg$/,
					loader: 'simple-svg-loader'
				}
			]
		},

		resolve: {
			extensions: ['.ts', '.js']
		},

		context: __dirname,

		plugins,

		watch: env.dev,

		node: {
			console: false,
			global: false,
			process: false,
			__filename: false,
			__dirname: false,
			Buffer: false,
			setImmediate: false
		}
	};
};
