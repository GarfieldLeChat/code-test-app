var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    args   = require('yargs').argv;

var jsSources = ['js/main.js'],
    jsDirectory = ['js/**/*.js'],
    jsDirectoryMods = ['js/modules/*.js'],
    sassSources = ['sass/*.scss'],
    cssOutputDir = 'css/',
    outputDir = 'js/global.js';

gulp.task('sass', function() {
  gulp.src(sassSources)
  .pipe(sass({global: 'compressed', outputStyle: 'compressed'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('css/'))
  .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(jsDirectoryMods)
  .pipe(concat('global.js'))
  .pipe(gulp.dest('js'))
  .pipe(rename('global-min.js'))
  .pipe(gulpif(args.production, uglify().on('error', gutil.log)))
  .pipe(gulp.dest('js'))
  .pipe(connect.reload());
});

gulp.task('reload', function(){
  gulp.src(jsDirectory)
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(jsDirectoryMods, ['js']);
  gulp.watch(jsDirectory, ['reload']);
  gulp.watch(sassSources, ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('build', function() {
    gulp.start('sass', 'js');
});

gulp.task('default', ['sass', 'js', 'watch']);