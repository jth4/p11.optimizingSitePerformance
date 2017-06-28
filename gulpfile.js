'use strict'

const gulp = require('gulp');
const image = require('gulp-image');

gulp.task('image', function() {
	gulp.src('./img/*')
	.pipe(image({
		pngquant: true,
		optipng: false,
		zopflipng: true,
		jpegRecompress: true,
		jpegoptim: false,
		mozjpeg: false,
		gifsicle: true,
		svgo: true
	}))
	.pipe(gulp.dest('./img/c'));
});

gulp.task('default', ['image']);