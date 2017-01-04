var path = require('path');
var argv = require('yargs').argv;
var glob = require('glob');
var webpack = require('webpack');
var cssVariables = require('postcss-css-variables');
var nesting = require('postcss-nesting');
var colorFunction = require('postcss-color-function');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');

var plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(true),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	})
];

module.exports = {
	entry: glob.sync('src/components/*/index.@(ts|js)').reduce(function(entries, p) {
		entries[p.split(path.sep).slice(-2)[0]] = path.join(__dirname, p);
		return entries;
	}, {
		focusHighlightController: path.join(__dirname, 'src/focusHighlightController.js')
	}),

	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist'),
		library: '[name]',
		libraryTarget: 'umd'
	},

	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /(?:node_modules|bower_components)/,
				loader: 'eslint-loader'
			}
		],

		loaders: [
			{
				test: /\.js$/,
				exclude: /(?:node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['@riim/babel-preset'],
					plugins: [
						'syntax-flow',
						'transform-flow-comments'
					]
				}
			},
			{
 				test: /\.ts$/,
 				exclude: /(?:node_modules|bower_components)/,
 				loader: 'awesome-typescript-loader'
 			},
			{
				test: /\.html$/,
				loader: 'raw-loader!collapse-html-whitespaces-loader'
			},
			{
				test: /\.beml$/,
				loader: 'raw-loader!collapse-line-breaks-loader!trim-lines-loader'
			},
			{
				test: /\.css$/,
				loader: 'simple-css-loader!postcss-loader'
			},
			{
				test: /\.svg$/,
				loader: 'simple-svg-loader'
			}
		]
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '']
	},

	externals: ['cellx', 'cellx-indexed-collections', 'rionite'],

	watch: argv.dev,

	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
		setImmediate: false
	},

	postcss: function() {
		return [
			cssVariables(),
			nesting(),
			colorFunction(),
			autoprefixer({ browsers: ['last 3 versions'] }),
			csso({ restructure: false })
		];
	},

	recordsPath: 'build/paths.json',

	plugins: plugins
};
