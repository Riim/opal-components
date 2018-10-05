const path = require('path');
const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const gulp = require('gulp');

gulp.task('movePackagesDTS', () => {
	glob.sync('packages/*/src/**/*.d.ts').forEach(dtsFilePath => {
		let targetPath = dtsFilePath.replace('/src/', '/dist/');
		mkdirp.sync(path.dirname(targetPath));
		fs.renameSync(dtsFilePath, targetPath);
	});
});
