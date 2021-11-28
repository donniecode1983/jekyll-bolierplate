// Requires
const { src, dest, watch, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");

function minHTML() {
  return src("public/**/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("public"));
}

exports.default = series(minHTML);
