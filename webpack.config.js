const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const postcssVariables = require('postcss-simple-vars');
const postcssRioniteComponent = require('postcss-rionite-component');
const postcssSassColorFunctions = require('postcss-sass-color-functions');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const cssVariables = require('./build/cssVariables');

const externals = [
	'@riim/escape-regexp',
	'@riim/gettext',
	'@riim/kebab-case',
	'@riim/next-tick',
	'@riim/next-uid',
	'@riim/platform',
	'@riim/rionite-snake-case-attribute-name',
	'cellx-collections',
	'cellx-decorators',
	'cellx',
	'date-exists',
	'history',
	'rionite',

	'@riim/opal-autosuggest',
	'@riim/opal-button',
	'@riim/opal-calendar',
	'@riim/opal-checkbox',
	'@riim/opal-components-common',
	'@riim/opal-date-input',
	'@riim/opal-dropdown',
	'@riim/opal-editable-text',
	'@riim/opal-file-input-validator',
	'@riim/opal-file-input',
	'@riim/opal-filtered-list',
	'@riim/opal-focus-highlight-controller',
	'@riim/opal-form',
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
	'@riim/opal-select-validator',
	'@riim/opal-select',
	'@riim/opal-share-button',
	'@riim/opal-sign-button',
	'@riim/opal-slider',
	'@riim/opal-switch-menu',
	'@riim/opal-switch',
	'@riim/opal-tabs',
	'@riim/opal-tag-select',
	'@riim/opal-tag',
	'@riim/opal-text-editor',
	'@riim/opal-text-input-validator',
	'@riim/opal-text-input',
	'@riim/opal-tree-list',
	'@riim/opal-tree-select',
	'@riim/opal-tree-tag-select'
];

module.exports = env => {
	if (!env) {
		env = {};
	}

	let plugins = [];

	return {
		mode: 'none',

		entry: fs.readdirSync('./packages').reduce((entries, name) => {
			entries[name] = `./packages/${name}/src/index.ts`;
			return entries;
		}, {}),

		output: {
			path: path.join(__dirname, 'packages'),
			filename: '[name]/dist/index.js',
			library: '@riim/[name]',
			libraryTarget: 'umd'
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /(?:node_modules|bower_components)/,
					loader: 'awesome-typescript-loader'
				},
				{
					test: /\.rnt$/,
					// loader: ['raw-loader', 'trim-lines-loader', 'collapse-line-breaks-loader']
					loader: 'rionite-template-loader'
				},
				{
					test: /\.css$/,
					loader: [
						'simple-css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									postcssVariables({ variables: cssVariables }),
									postcssRioniteComponent(),
									postcssSassColorFunctions(),
									autoprefixer({ overrideBrowserslist: ['last 3 versions'] }),
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
			extensions: ['.ts', '.js']
		},

		optimization: {
			moduleIds: 'hashed'
		},

		context: __dirname,

		externals,

		plugins,

		node: {
			console: false,
			global: false,
			process: false,
			__filename: false,
			__dirname: false,
			Buffer: false,
			setImmediate: false
		}

		// recordsPath: path.join(__dirname, 'build/paths.json')
	};
};
