const {
	src,
	dest,
	series,
	watch,
	parallel
} = require('gulp')
const parcel = require('gulp-parcel')
const rename = require('gulp-rename')
const { reload } = require('./server')
const { js } = require('../tasks.conf')

const build = series(
	setProdution,
	PARCEL,
	ParcelJS
)
const dev 	= series(
	setDev,
	PARCEL_DEV,
	ParcelWatch
)

exports.default = build;
exports.build 	= build;
exports.dev 	= dev;
exports.watch 	= dev;

function setDev(done) {
	done();
	return process.env.NODE_ENV = 'development';

}

function setProdution(done) {
	done();
	return process.env.NODE_ENV = 'production';

}

function PARCEL(done) {
	src(js.src, {
		read: false,
		'process.env.NODE_ENV': JSON.stringify('production')
	})
		.pipe(parcel({
			outDir: js.tmp,
			minify: true,
			watch: false,
		}))
		.pipe(dest(js.tmp))

	done()
}

function PARCEL_DEV(done) {
	src(js.src, { read: false })
		.pipe(parcel({
			outDir: js.tmp,
			minify: false,
			watch: true
		}))
		.pipe(dest(js.tmp))


	done()
}

function ParcelCSS(done) {
	src(js.cssVue.src)
		.pipe(rename('_vue-components.scss'))
		.pipe(dest(js.cssVue.dist))

	done();
}

function ParcelJS(done) {
	src(js.watch)
		.pipe(dest(js.dist))

	done()
}

function ParcelWatch(done) {
	watch(js.cssVue.src,
		series(
			ParcelCSS,
			reload
		)
	);
	watch(js.watch, series(
		ParcelJS,
		reload
	))

	done();
}
