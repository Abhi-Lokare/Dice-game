var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
nested = require('postcss-nested');


gulp.task('html', function(){
        console.log("something changed in HTML file");
});

gulp.task('styles', function(){
   gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
   .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    })
});