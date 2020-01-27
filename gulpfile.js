var gulp = require("gulp");
var server = require("browser-sync").create();
var sass = require("gulp-sass");
var csso = require("gulp-csso");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");

gulp.task("css", function () {
    return gulp.src("source/sass/style.scss")
      .pipe(sass())
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe(csso())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("build/css"))
  });

  gulp.task("html", function () {
    return gulp.src("source/*.html")
      .pipe(posthtml([
        include()
      ]))
      .pipe(gulp.dest("build"));
  });

gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
    gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("clean", function () {
    return del("build");
  });
  
  gulp.task("copy", function () {
    return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**",
      "source/*.ico"
    ], {
      base: "source",
      ignore: "source/img/sprite-*.svg"
    })
      .pipe(gulp.dest("build"));
  });
  
  gulp.task("build", gulp.series(
    "clean",
    "copy",
    "css",
    "html"
  ));
  
  gulp.task("start", gulp.series("build", "server"));
