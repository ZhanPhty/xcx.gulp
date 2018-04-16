var gulp = require('gulp');
var config = require('../config');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['build'], function() {
    gulp.watch(config.watch.less, ['less']);
    gulp.watch(config.watch.styles, ['styles']);
    gulp.watch(config.watch.base64, ['base64']);
    gulp.watch(config.watch.images, ['images']);
});

// sass监控
gulp.task('watch:sass', ['sass', 'styles'], function() {
    gulp.watch(config.watch.sass, ['sass']);
    gulp.watch(config.watch.styles, ['styles']);
});

// less监控
gulp.task('watch:less', ['less', 'styles'], function() {
    gulp.watch(config.watch.less, ['less']);
    gulp.watch(config.watch.styles, ['styles']);
});