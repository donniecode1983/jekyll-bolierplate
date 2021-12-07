// Requires
const { src, dest, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");
// const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
// const imagemin = require('gulp-imagemin');
// const imagewebp = require('gulp-webp');

// import gulp from "gulp";
// import src from "gulp";
// import dest from "gulp";
// import series from "gulp";
// import htmlmin from "gulp-htmlmin";
// import minify from "gulp-clean-css";
// import terser from "gulp-terser";
// import GulpCleanCss from "gulp-clean-css";


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

// gulp.series(minHTML, compilecss, jsmin, copyImgs);
exports.default = series(minHTML, compilecss, jsmin, copyImgs);
// series(minHTML, compilecss, jsmin, copyImgs);
// series(minHTML, compilecss, jsmin);

