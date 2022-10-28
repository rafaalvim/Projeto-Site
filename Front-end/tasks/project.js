const {
	src,
	dest,
	watch,
	series,
	parallel
} = require('gulp');

// const pug 		= require('./pug');
const sass 		= require('./sass');
const vendors 	= require('./vendors');
const fonts 	= require('./fonts');
const server 	= require('./server');
const spritePNG	= require('./spritePNG');
const spriteSVG	= require('./spriteSVG');
const imgs		= require('./imgs');
const js		= require('./javascript');
const app		= require('./app');
const html      = require('./html')

const start = series(
	app.default,
	vendors.default,
	spritePNG.default,
	spriteSVG.default,
	//pug.default,
	fonts.default,
	sass.default,
	imgs.default,
	js.default,
	app.manifest,
	app.icons,
	html.default
);

const dev = parallel(
	app.manifest,
	server.default,
	spritePNG.watch,
	spriteSVG.watch,
	//pug.watch,
	fonts.watch,
	sass.watch,
	imgs.watch,
	js.watch,
	app.watch,
	html.dev
);

exports.default = series(
	start,
	dev
);

exports.start 	= start;
exports.dev 	= dev;
exports.build 	= parallel(
	// pug.build,
	js.build,
	imgs.build,
);
