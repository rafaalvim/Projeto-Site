const {
	src,
	dest,
	watch,
	series,
	parallel
} = require('gulp');
const concat    = require('gulp-concat');
const { fonts } = require('../tasks.conf');
const server 	= require('./server');

exports.default = parallel(copyFonts, concatFonts);
exports.watch	= parallel(copyFontsWatch, cssFonts);

function copyFonts (done) {
	src(fonts.src)
		.pipe(dest(fonts.dist));

	done();
}

function concatFonts(done) {
	src(fonts.css.src)
		.pipe(concat('_fontfaces.scss'))
		.pipe(dest(fonts.css.dist));

	done();
}

function cssFonts(done) {
	watch(fonts.css.src, concatFonts);

	done();
}

function copyFontsWatch (done) {
	watch(fonts.src, series(
		copyFonts,
		server.reload
	));

	done();
}
