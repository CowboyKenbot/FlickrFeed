var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Find and Convert SCSS Files
gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('app/css'))
});

// Gulp Watch SCSS Files
gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', ['sass'])
});