var gulp           = require('gulp');
var path           = require('path');
var less           = require('gulp-less');
var notify         = require('gulp-notify');
var plumber        = require('gulp-plumber');
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


gulp.task('less', function () {
  return gulp.src(config.less.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.less.dest))
});