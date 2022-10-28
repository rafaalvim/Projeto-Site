const {
	src,
	dest,
	watch,
	series
} = require('gulp');

const { html } = require('../tasks.conf')
const { reload } = require('./server')

exports.default = HTML
exports.dev = WATCH_HTML;

function HTML(done) {
	src(html.src)
		.pipe(dest(html.dist))

	done();
}

function WATCH_HTML(done) {
	watch(html.src, series(
		HTML,
		reload
	))
}
