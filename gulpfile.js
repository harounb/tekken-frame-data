var jsonlint = require("gulp-jsonlint");
var gulp = require("gulp");
var src = ["./ttt2/**/*.json", "./t7/**/*.json"];

gulp.task("jsonlint", function() {
  return gulp
    .src(src)
    .pipe(jsonlint())
    .pipe(jsonlint.failOnError())
    .pipe(jsonlint.reporter());
});

gulp.task("ci", ["jsonlint"]);
