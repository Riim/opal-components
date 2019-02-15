const gulp = require('gulp');

require('./movePackagesDTS');

gulp.task('default', gulp.series('build', 'movePackagesDTS'));
