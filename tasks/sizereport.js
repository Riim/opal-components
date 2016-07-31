var gulp = require('gulp');
var sizereport = require('gulp-sizereport');

gulp.task('sizereport', function() {
	return gulp.src('dist/*.min.js')
		.pipe(sizereport({
			total: true,
			gzip: true
		}));
});
