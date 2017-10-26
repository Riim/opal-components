let gulp = require('gulp');
let sizereport = require('gulp-sizereport');

gulp.task('sizereport', () => {
	return gulp.src('dist/*.min.js').pipe(
		sizereport({
			total: true,
			gzip: true
		})
	);
});
