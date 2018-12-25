const gulp = require('gulp');

require('./moveDTS');

gulp.task('default', gulp.parallel('moveDTS'));
