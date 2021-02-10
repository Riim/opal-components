const gulp = require('gulp');

require('./movePackagesDTs_');

gulp.task('default', gulp.series('build', 'movePackagesDTs'));
