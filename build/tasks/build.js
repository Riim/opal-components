const childProcess = require('child_process');
const glob = require('glob');
const gulp = require('gulp');

const useCPUCount = Math.min(1, Math.floor(require('os').cpus().length / 2));

gulp.task('build', done => {
	let packages = glob.sync(`packages/*/src/index.ts`);
	let index = 0;
	let inProcessCount = 0;

	function buildPackage(p) {
		inProcessCount++;

		let process = childProcess.exec(
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

			if (!--inProcessCount) {
				done();
			}
		});
	}

	while (index < useCPUCount) {
		buildPackage(packages[index++]);
	}
});
