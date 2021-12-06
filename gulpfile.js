// Requires
const { src, dest, watch, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
// const imagemin = require('gulp-imagemin');
// const imagewebp = require('gulp-webp');


// Minify HTML
function minHTML() {
  return src("public/**/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("production"));
}
// Clean and minify CSS
function compilecss() {
  return src("public/**/*.css")
  .pipe(minify())
  .pipe(dest("production/"))
}

// Minify JS
function jsmin() {
  return src("public/**/*.js")
  .pipe(terser())
  .pipe(dest("production/"))
}

// Copy images folder to production
function copyImgs() {
  return src("public/**/*.{jpg,png,jpeg}")
  .pipe(dest("production/"))
}

// Optimize Images
// function optimizeimg() {
//   return src("public/images/**/**/*.{jpg,png}")
//   .pipe(imagemin([
//     imagemin.mozjpeg({ quality: 80, progressive: true}),
//     imagemin.optipng({ optimizationLevel: 2}),
//   ]))
//   .pipe(dest("production/assets/images"))
// }

// Watch Task for CSS
// function watchTask(){
//   watch("public/**/*.css", compilecss);
// }

exports.default = series(minHTML, compilecss, jsmin, copyImgs);
// series(minHTML, compilecss, jsmin);
