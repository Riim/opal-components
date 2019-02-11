const gulp = require('gulp');

require('./movePackagesDTS');

gulp.task('default', gulp.parallel('movePackagesDTS'));
