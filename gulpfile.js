// Requires
const { src, dest, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');

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

exports.default = series(minHTML, compilecss, jsmin, copyImgs);


