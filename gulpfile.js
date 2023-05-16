let gulp = require("gulp");
let browsersync = require("browser-sync").create();
let sass = require("gulp-sass")(require("sass"));

//compila o SASS (.scss)
gulp.task(
  "sass",
  gulp.series(function () {
    return gulp
      .src(["src/scss/*.scss"])
      .pipe(sass())
      .pipe(gulp.dest("src/css"))
      .pipe(browsersync.stream());
  }),
);

//servidor para olhar os arquivos .html e .scss
gulp.task(
  "server",
  gulp.series(["sass"], function () {
    browsersync.init({
      server: "src",
    });

    gulp.watch(["src/scss/*.scss"], gulp.parallel(["sass"]));

    gulp
      .watch(["src/*.html", "src/scss/*.scss", "src/css/*.css"])
      .on("change", gulp.parallel(browsersync.reload));
  }),
);

gulp.task("default", gulp.series(["server"]));
