let path = require('path');
let fs = require('fs');
let glob = require('glob');
let mkdirp = require('mkdirp');
let rimraf = require('rimraf');
let gulp = require('gulp');

gulp.task('default', () => {
	glob.sync('packages/*/dist/index.d.ts').forEach(dtsFilePath => {
		rimraf.sync(path.dirname(dtsFilePath));
	});

	glob.sync('packages/*/src/**/*.d.ts').forEach(dtsFilePath => {
		let targetPath = dtsFilePath.replace('/src/', '/dist/');
		mkdirp.sync(path.dirname(targetPath));
		fs.renameSync(dtsFilePath, targetPath);
	});
});
