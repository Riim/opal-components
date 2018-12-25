const path = require('path');
const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const gulp = require('gulp');

gulp.task('movePackagesJS', done => {
	glob.sync('packages/packages/*/src/index.ts/dist/index.js').forEach(jsFilePath => {
		let targetPath = jsFilePath.replace(
			/^packages\/packages\/([^\/]+)\/src\/index\.ts\//,
			'packages/$1/'
		);

		mkdirp.sync(path.dirname(targetPath));
		fs.renameSync(jsFilePath, targetPath);
	});

	done();
});
