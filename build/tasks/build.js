const childProcess = require('child_process');
const glob = require('glob');
const gulp = require('gulp');

const useCPUCount = Math.min(1, Math.floor(require('os').cpus().length / 2));

gulp.task('build', (done) => {
	let packages = glob
		.sync('packages/*/src/index.ts')
		.map((p) => p.split('/')[1])
		.filter((package) => package != 'opal-components');
	let index = 0;
	let inProcessCount = 0;
	let stat = [];

	function buildPackage(package) {
		inProcessCount++;

		let startTime = Date.now();
		let process = childProcess.exec(
			'gulp buildPackage --package=' + package,
			(err, stdout, stderr) => {
				stat.push([package, Date.now() - startTime, err && err.code]);

				if (err) {
					console.log(err.stack);
					console.log('Error code:', err.code);
					console.log('Signal received:', err.signal);
				}

				console.log('stdout:', stdout);
				console.log('stderr:', stderr);
			}
		);

		process.on('exit', (code) => {
			console.log('Child process exited with exit code', code);

			if (index < packages.length) {
				buildPackage(packages[index++]);
			}

			if (!--inProcessCount) {
				done();
				console.log(stat.length, stat);
			}
		});
	}

	while (index < useCPUCount) {
		buildPackage(packages[index++]);
	}
});
