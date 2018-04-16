var gulp           = require('gulp');
var rename         = require('gulp-rename');
var postcss        = require('gulp-postcss');
var precss         = require('precss');
var plumber        = require('gulp-plumber');
var gutil          = require('gulp-util');
var header         = require('gulp-header');
var mqpacker       = require('css-mqpacker');
var cssver         = require('gulp-make-css-url-version');
var cleancss       = require('gulp-clean-css');
var csso           = require('gulp-csso');
var autoprefixer   = require('autoprefixer');

var config         = require('../config');

var banner         = ['/**',
  ' * Copyright (c) <%= new Date().getFullYear() %> Cofey',
  ' * @description ' + config.pkg.description,
  ' * @version ' + config.pkg.version,
  ' * @link ' + config.pkg.link,
  ' * @license ' + config.pkg.license,
  // ' * @Release ' + '<%= new Date() %>',
  ' **/',
  ''].join('\n');


function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

/**
 * 运行PostCSS以及插件
 * Build sourcemaps and minimize
 */
var processors = [
  precss(config.styles.options.precss),
  autoprefixer(config.styles.options.autoprefixer),
  mqpacker(config.styles.options.mqpacker)
];

gulp.task('styles', function () {
  return gulp.src(config.styles.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(postcss(processors))
    .pipe(cssver())
    .pipe(csso())
    .pipe(cleancss(config.styles.options.cleancss))
    .pipe(header(banner, { pkg : config.pkg }))
    .pipe(rename((path) => path.extname = '.wxss'))
    .pipe(gulp.dest(config.styles.dest));
});