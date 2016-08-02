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
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}),
];

module.exports = {
	watch: argv.dev,

	entry: glob.sync('src/opal-components/*/index.js').reduce(function(entries, p) {
		entries[p.split(path.sep).slice(-2)[0]] = path.join(__dirname, p);
		return entries;
	}, {
		focusHighlightController: path.join(__dirname, 'src/opal-components/focusHighlightController.js')
	}),

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		library: '[name]',
		libraryTarget: 'umd'
	},

	externals: ['cellx', 'rionite'],

	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /(?:node_modules|bower_components)/,
				loader: 'eslint'
			}
		],

		loaders: [
			{
				test: /\.js$/,
				exclude: /(?:node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015'],
					plugins: [
						'syntax-flow',
						'transform-flow-strip-types'
					]
				}
			},
			{
				test: /\.html$/,
				loader: 'raw!collapse-html-whitespaces'
			},
			{
				test: /\.css$/,
				loader: 'simple-css!postcss'
			},
			{
				test: /\.svg$/,
				loader: 'simple-svg'
			}
		]
	},

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

	plugins: plugins
};
