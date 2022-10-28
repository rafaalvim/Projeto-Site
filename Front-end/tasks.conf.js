module.exports = {
	app : {
		name	   : 'Inova Onze',
		short_name : 'Inova Onze',
		themeColor : '#4b73dd',
		src 	   : 'src/assets/application/*.png',
		dist 	   : 'dist/assets/application'
	},
	html: {
		src: 'src/html/*.html',
		dist: 'dist/'
	},
	js : {
		src : 'src/assets/js/scripts.min.js',
		dist: 'dist/assets/js',
		tmp: '.tmp',
		watch: '.tmp/*.{js,map}',
		cssVue: {
			src: '.tmp/*.css',
			dist: 'src/assets/scss/components'
		}
	},
	imagens: {
		src  : 'src/assets/images/**/*.{jpg,png,svg,ico,gif}',
		dist : 'dist/assets/images/',
		webp : {
			src : 'src/assets/images/**/*.{png,jpg}',
			dist: 'dist/assets/images/',
			watch: 'dist/assets/images/**/*.{png,jpg}'
		}
	},
	sprites: {
		png : {
			src: 'src/assets/sprites/png/*.png',
			dist: {
				img : 'dist/assets/images/',
				css : 'src/assets/scss/components/'
			}
		},
		svg : {
			src   : 'src/assets/sprites/svg/*.svg',
			dist  : {
				pug : 'src/pug/components/',
				img : 'dist/assets/images/'
			}
		}
	},
	fonts : {
		src : 'src/assets/fonts/**/*',
		dist: 'dist/assets/fonts/',
		css : {
			src : 'src/assets/fonts/**/*.{scss,css}',
			dist: 'src/assets/scss/tipografia/'
		}
	},
	scss : {
		src 	: 'src/assets/scss/estilos.scss',
		watch 	: 'src/assets/scss/**/**/**/*.scss',
		dist 	: 'dist/assets/css/'
	},
	uncssConfig : {
		html 		: ['dist/*.html'],
		ignore 		: [
				'.alerta',
			'.alertas-container'
		]
	},
	pug : {
		src 	: 'src/pug/*.pug',
		watch 	: 'src/pug/**/**/**/**/**/*.pug',
		dist 	: 'dist/'
	},
	beautifyConfig : {
		html  : {
			"indent_size": 4,
			"indent_with_tabs": true,
			"indent_char": " ",
			"indent_with_tabs": true,
			"preserve_newlines": true,
			"unformatted": ["style"],
			"inline": [
				"abbr",
				"area",
				"b",
				"bdi",
				"bdo",
				"br",
				"cite",
				"code",
				"data",
				"datalist",
				"del",
				"dfn",
				"em",
				"embed",
				"i",
				// "img",
				"ins",
				"kbd",
				"keygen",
				"map",
				"mark",
				"math",
				"meter",
				"object",
				"progress",
				"q",
				"ruby",
				"s",
				"samp",
				"small",
				"span",
				"strong",
				"style",
				"sub",
				"sup",
				"time",
				"u",
				"var",
				"wbr",
				"text",
				"acronym",
				"big",
				"dt",
				"ins",
				"strike",
				"tt"
			]
		}
	},
	vendors : [
		// jQuery
		{
			src  : [
				'node_modules/jquery/dist/jquery.min.js',
				'node_modules/jquery/dist/jquery.min.map'
			],
			dist : 'dist/assets/js'
		},
		// Bootstrap
		{
			src: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
			rename: 'bootstrap.min.js',
			dist: 'dist/assets/js/'
		},
		{
			src: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map',
			dist: 'dist/assets/js/'
		},
		// Font Awesome
		{
			src : 'node_modules/@fortawesome/fontawesome-free/webfonts/*',
			dist: 'dist/assets/webfonts'
		},
		// OWL CAROUSEL
		{
			src: 'node_modules/owl.carousel2/dist/assets/owl.carousel.css',
			dist: 'src/assets/scss/vendors/',
			rename: '_owl-carousel.scss'
		},
		{
			src: 'node_modules/owl.carousel2/dist/owl.carousel.min.js',
			dist: 'dist/assets/js'
		}
	]
}
