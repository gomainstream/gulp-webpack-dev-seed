/*
 * dependencies
 */

var browserSync = require('browser-sync').create();
var del = require('del');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var htmlreplace = require('gulp-html-replace');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var symlink = require('gulp-sym');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var webpackDevServer = require('webpack-dev-server');
var webpackStream = require('webpack-stream');

/*
 * functions
 */

function errorGraceful (error) {
  console.log(error.toString());
  this.emit('end');
}


/*
 * tasks
 */

gulp.task('build', function (cb) {
  runSequence('clean',
    ['html', 'images', 'js'],
    cb);
});

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('default', ['build']);

gulp.task('lint', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('js', ['lint'], function () {
  return gulp.src('src/js/**/*.js')
    .pipe(webpackStream(webpackConfig))
    .on('error', errorGraceful)
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('serve', ['build'], function () {
  new webpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: './src'
  }).listen(7777, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:7777/');
  });
});
