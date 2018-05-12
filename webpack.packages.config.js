let path = require('path');
let glob = require('glob');
let webpack = require('webpack');
let postcssCSSVariables = require('postcss-css-variables');
let postcssRioniteComponent = require('@riim/postcss-rionite-component');
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

		entry: glob.sync('packages/*/src/index.ts').reduce((entries, p) => {
			entries[p.split(path.sep).slice(-3)[0]] = path.join(__dirname, p);
			return entries;
		}, {}),

		output: {
			path: __dirname,
			filename: 'packages/[name]/dist/index.js',
			library: '@riim/[name]',
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
					test: /\.nelm$/,
					loader: ['raw-loader', 'trim-lines-loader', 'collapse-line-breaks-loader']
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
					loader: 'simple-svg-loader',
					options: {
						removeAttributes: ['stroke-width', 'stroke', 'fill']
					}
				}
			]
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx']
		},

		externals: [
			'@riim/debounce-throttle',
			'@riim/gettext',
			'@riim/hyphenize',
			'@riim/map-set-polyfill',
			'@riim/mixin',
			'@riim/next-tick',
			'@riim/next-uid',
			'@riim/object-assign-polyfill',
			'@riim/platform',
			'@riim/rionite-snake-case-attribute-name',
			'cellx',
			'cellx-decorators',
			'created-browser-history',
			'date-exists',
			'reflect-metadata',
			'rionite',

			'@riim/opal-autosuggest',
			'@riim/opal-button',
			'@riim/opal-calendar',
			'@riim/opal-checkbox',
			'@riim/opal-date-input',
			'@riim/opal-dropdown',
			'@riim/opal-editable-text',
			'@riim/opal-filtered-list',
			'@riim/opal-focus-highlight-controller',
			'@riim/opal-group',
			'@riim/opal-icon',
			'@riim/opal-input-mask',
			'@riim/opal-input-validator',
			'@riim/opal-loaded-list',
			'@riim/opal-loader',
			'@riim/opal-modal',
			'@riim/opal-multirow',
			'@riim/opal-multiselect',
			'@riim/opal-notification',
			'@riim/opal-popover',
			'@riim/opal-radio-group',
			'@riim/opal-router',
			'@riim/opal-select',
			'@riim/opal-select-validator',
			'@riim/opal-sign-button',
			'@riim/opal-slider',
			'@riim/opal-switch',
			'@riim/opal-switch-menu',
			'@riim/opal-tabs',
			'@riim/opal-tag-select',
			'@riim/opal-text-input',
			'@riim/opal-text-input-validator',
			'@riim/opal-tree-list',
			'@riim/opal-tree-select',
			'@riim/opal-tree-tag-select',
			'@riim/opal-utils'
		],

		plugins,

		node: {
			console: false,
			global: false,
			process: false,
			__filename: false,
			__dirname: false,
			Buffer: false,
			setImmediate: false
		},

		recordsPath: path.join(__dirname, 'build/paths.json')
	};
};
