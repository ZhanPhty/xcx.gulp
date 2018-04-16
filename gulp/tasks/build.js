var gulp        = require('gulp');
var runSequence = require('run-sequence');

/*
 * build 开发环境
 */
gulp.task('build', function(callback) {
  runSequence(
  [ 
    'less',
    'styles',
    'images'
  ],
  'base64',
  callback);
});



/*
 * release 发布生产环境
 */
gulp.task('release', function(callback) {
  runSequence(
  [ 
    'less',
    'styles',
    'images'
  ],
   'base64',
   'optimize:images',
  callback);
});