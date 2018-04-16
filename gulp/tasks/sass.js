var gulp           = require('gulp');
var path           = require('path');
var sass           = require('gulp-sass');
var gutil          = require('gulp-util');
var postcss        = require('gulp-postcss');
var precss         = require('precss');
var mqpacker       = require('css-mqpacker');
var autoprefixer   = require('autoprefixer');

var config         = require('../config');
/**
 * sass编译
 * Build sourcemaps
 */

var processors = [
  precss(config.styles.options.precss),
  autoprefixer(config.styles.options.autoprefixer),
  mqpacker(config.styles.options.mqpacker)
];

gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(sass(config.sass.options.outputstyle).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.sass.dest))
});