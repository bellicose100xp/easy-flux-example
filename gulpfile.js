// gulpfile.js
var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        dist: './dist',
        js: ['./src/**/*.js'],
        mainJs: './app.js'
    }
};

gulp.task('connect', function () {
    connect.server({
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('./index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'
        }));
});

gulp.task('build', function () {
    return browserify({
        entries: config.paths.mainJs,
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

//gulp.task('compress', function() {
//    return gulp.src(config.paths.dist + '/bundle.js')
//        .pipe(uglify())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest(config.paths.dist))
//        .pipe(connect.reload());
//});

gulp.task('watch', function () {
    gulp.watch(config.paths.js, ['build']);
});

gulp.task('default', ['build', 'open', 'watch']);


