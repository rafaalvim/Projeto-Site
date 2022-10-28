const gulp 			= require('gulp');
const {sprites}		= require('../tasks.conf');
const svgstore		= require('gulp-svgstore');
const rename 		= require('gulp-rename');
const imagemin 		= require('gulp-imagemin');
const server 		= require('./server');
const spriteSVG 	= sprites.svg;

exports.default 	= spritesvg;
exports.watch 		= spriteWatchSVG;

function spritesvg (done) {
	var data = gulp.src(spriteSVG.src)
		.pipe(svgstore())
		.pipe(imagemin([
			imagemin.svgo({
				plugins: [
					{ optimizationLevel: 3 },
					{ progessive: true },
					{ interlaced: true },
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: false },
					{ cleanupIDs: false }
				]
			})
		]));

		data.pipe(rename('sprites.svg'))
			.pipe(gulp.dest(spriteSVG.dist.img));

		data.pipe(rename('sprites.pug'))
			.pipe(gulp.dest(spriteSVG.dist.pug));

	done();
}

function spriteWatchSVG (done) {
	gulp.watch(spriteSVG.src, gulp.series(
		spritesvg,
		server.reload
	));

	done();
}
