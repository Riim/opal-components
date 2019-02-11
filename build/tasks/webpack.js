const promiseSeries = require('promise.series');
const path = require('path');
const glob = require('glob');
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const postcssCSSVariables = require('postcss-css-variables');
const postcssRioniteComponent = require('@riim/postcss-rionite-component');
const postcssNested = require('postcss-nested');
const postcssColorFunction = require('postcss-color-function');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');

const externals = [
	'@riim/debounce-throttle',
	'@riim/gettext',
	'@riim/kebab-case',
	'@riim/map-set-polyfill',
	'@riim/next-tick',
	'@riim/next-uid',
	'@riim/object-assign-polyfill',
	'@riim/platform',
	'@riim/rionite-snake-case-attribute-name',
	'cellx',
	'cellx-decorators',
	'date-exists',
	'history',
	'history/createBrowserHistory',
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
];

gulp.task('webpack', done => {
	promiseSeries(
		glob.sync('packages/opal-autosuggest/src/index.ts').map(p => {
			let config = {
				mode: 'none',

				entry: {
					[p.split('/')[1]]: './' + p
				},

				output: {
					path: path.join(__dirname, '../../packages'),
					filename: '[name]/dist/index.js',
					library: '@riim/[name]',
					libraryTarget: 'umd'
				},

				module: {
					rules: [
						// {
						// 	test: /\.ts$/,
						// 	exclude: /(?:node_modules|bower_components)/,
						// 	enforce: 'pre',
						// 	loader: 'tslint-loader'
						// },
						{
							test: /\.ts$/,
							exclude: /(?:node_modules|bower_components)/,
							loader: 'awesome-typescript-loader'
						},
						{
							test: /\.nelm$/,
							loader: [
								'raw-loader',
								'trim-lines-loader',
								'collapse-line-breaks-loader'
							]
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
					extensions: ['.ts', '.js']
				},

				context: path.join(__dirname, '../..'),

				externals,

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

			return () =>
				new Promise((resolve, reject) => {
					webpack(config, onComplete);

					function onComplete(err, stats) {
						if (err) {
							onError(err);
						} else {
							let strStats = stats.toString({ colors: true, reasons: true });

							if (stats.hasErrors()) {
								onError(strStats);
							} else {
								onSuccess(strStats);
							}
						}
					}

					function onError(err) {
						reject(new gutil.PluginError('webpack', err));
					}

					function onSuccess(detailInfo) {
						gutil.log('[webpack]', detailInfo);
						resolve();
					}
				});
		})
	).then(
		() => {
			done();
		},
		err => {
			done(err);
		}
	);
});