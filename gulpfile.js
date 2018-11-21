var jsonlint = require("gulp-jsonlint");
var gulp = require("gulp");
var diff = require("gulp-diff");
var beautify = require("gulp-beautify");
var src = ["./.jsbeautifyrc", "./ttt2/**/*.json", "./t7/**/*.json"];

gulp.task("formatcheck", function() {
  return (
    gulp
      .src(src)
      .pipe(beautify())
      .pipe(diff())
      // emit an error on finding diffs
      .pipe(diff.reporter({ fail: true }))
  );
});

gulp.task("jsonlint", function() {
  return gulp
    .src(src)
    .pipe(jsonlint())
    .pipe(jsonlint.failOnError())
    .pipe(jsonlint.reporter())
    .pipe(diff.reporter({ fail: true }));
});

gulp.task("format", function() {
  return gulp
    .src(src, { base: "./" })
    .pipe(beautify())
    .pipe(gulp.dest("."));
});

gulp.task("ci", ["jsonlint", "formatcheck"]);
