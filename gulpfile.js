// const gulp = require("gulp");
// const htmlmin = require("gulp-htmlmin");

// function defaultTask(cb) {
//   // place code for your default task here
//   gulp.task("minify", () => {
//     return gulp
//       .src("public/*.html")
//       .pipe(htmlmin({ collapseWhitespace: true }))
//       .pipe(gulp.dest("production"));
//   });
//   cb();
// }

// exports.default = defaultTask;

// Requires
const { src, dest, watch, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");

function minHTML() {
  return src("public/**/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("public"));
}

exports.default = series(minHTML);
