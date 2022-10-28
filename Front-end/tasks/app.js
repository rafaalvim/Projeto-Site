const gulp 		= require('gulp');
const fs 		= require('fs');
const rename 	= require('gulp-rename');
const resizer 	= require('gulp-images-resizer');
const {app}		= require('../tasks.conf');
const server 	= require('./server');

exports.default 	= copyIcon;
exports.icons 		= gerarIcons;
exports.manifest 	= gerarManifest;
exports.watch 		= watchApp;

function watchApp (done) {
	gulp.watch(app.src, gulp.series(
		gerarIcons,
		gerarManifest,
		server.reload
	))

	done();
}

function gerarManifest (d) {
	let fileContent = jsonFile(app);

	fs.writeFile(`${app.dist}/manifest.json`, fileContent, err => {
		if(err) return err;

		console.log('Manifest.json gerado com sucesso!');
		console.log(`${app.dist}/manifest.json`);
	});

	d();
}

function gerarIcons (done) {
	const sizes = [72, 96,128,144,152,192,384, 512];

	sizes.forEach(size => {
		gulp.src(app.src)
			.pipe(resizer({
				width	: size,
				height	: size
			}))
			.pipe(rename({
				suffix : `-${size}x${size}`
			}))
			.pipe(gulp.dest(app.dist))
	});

	done();
}

function copyIcon (d) {
	gulp.src(app.src)
		.pipe(gulp.dest(app.dist));

	d();
}



function jsonFile (config) {
	return JSON.stringify({
		"name" 				: config.name,
		"short_name" 		: config.short_name || config.appName,
		"theme_color" 		: config.themeColor,
		"background_color" 	: config.themeColor,
		"display" 			: "standalone",
		"Scope" 			: "/",
		"start_url" 		: "/",
		"icons" 			: [
			{
				"src" 	: "icon-72x72.png",
				"sizes" : "72x72",
				"type" 	: "image/png"
			},
			{
				"src" 	: "icon-96x96.png",
				"sizes" : "96x96",
				"type" 	: "image/png"
			},
			{
				"src" 	: "icon-128x128.png",
				"sizes" : "128x128",
				"type" 	: "image/png"
			},
			{
				"src" 	: "icon-144x144.png",
				"sizes" : "144x144",
				"type" 	: "image/png"
			},
			{
				"src" 	: "icon-152x152.png",
				"sizes" : "152x152",
				"type" 	: "image/png"
			},
			{
				"src" 	: "icon-192x192.png",
				"sizes" : "192x192",
				"type" 	: "image/png"
			},
			{
				"src" 	: "icon-384x384.png",
				"sizes" : "384x384",
				"type" 	: "image/png"
			},
			{
				"src" 	: "icon-512x512.png",
				"sizes" : "512x512",
				"type" 	: "image/png"
			}
		],
		"splash_pages" : null
	}, undefined, 4);
}
