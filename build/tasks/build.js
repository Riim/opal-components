const child_process = require('child_process');
const glob = require('glob');
const gulp = require('gulp');

const numCPUs = require('os').cpus().length;

gulp.task('build', done => {
	let packages = glob.sync(`packages/*/src/index.ts`);
	let index = 0;

	function buildPackage(p) {
		let process = child_process.exec(
			'gulp buildPackage --package=' + p.split('/')[1],
			(err, stdout, stderr) => {
				if (err) {
					console.log(err.stack);
					console.log('Error code:', err.code);
					console.log('Signal received:', err.signal);
				}

				console.log('stdout:', stdout);
				console.log('stderr:', stderr);
			}
		);

		process.on('exit', code => {
			console.log('Child process exited with exit code', code);

			if (index < packages.length) {
				buildPackage(packages[index++]);
			}
		});
	}

	while (index < numCPUs) {
		buildPackage(packages[index++]);
	}
});
