let path = require('path');
let fs = require('fs');
let glob = require('glob');
let mkdirp = require('mkdirp');
let gulp = require('gulp');

gulp.task('movePackagesDTS', () => {
	glob.sync('packages/*/src/**/*.d.ts').forEach(dtsFilePath => {
		let targetPath = dtsFilePath.replace('/src/', '/dist/');
		mkdirp.sync(path.dirname(targetPath));
		fs.renameSync(dtsFilePath, targetPath);
	});
});
