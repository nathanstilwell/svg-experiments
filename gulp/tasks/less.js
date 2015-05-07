/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  gulp.src('assets/less/*.less')
  .pipe(less({
    paths: [
      'assets/less'
    ]
  }))
  .pipe(gulp.dest('public/css'));
  gulp.watch(['assets/less/**/*.less'], ['less']);
});