const gulp = require('gulp');
var browserifyBuild = require('ionic-gulp-browserify-typescript');

gulp.task('build', browserifyBuild);

gulp.task('watch', function(){
  return browserifyBuild({
    watch: true,
    browserifyOptions: { debug: false } //if you want to disable sourcemaps
  });
});
