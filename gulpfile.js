var gulp         = require("gulp"),
    minifyCss    = require("gulp-clean-css"),
    concatCss    = require("gulp-concat-css"),
    autoprefixer = require("gulp-autoprefixer"),
    pug          = require("gulp-pug"),
    sass         = require("gulp-sass"),
    uglify       = require("gulp-uglify"),
    connect      = require("gulp-connect"),
    livereload   = require("gulp-livereload"),
    notify       = require("gulp-notify"),
    rename       = require("gulp-rename");

var path = {
    build: {
        html: "",
        js: "js/",
        css: "",
    },
    src: {
        pug: "pug/index.pug",
        styles: "sass/main.scss",
        js: "js/main.js"
    },
    watch: {
        pug: "pug/index.pug",
        styles: "sass/main.scss",
        js: "js/main.js",
        images: "images/*.*"
    }
};

gulp.task("gulp:connect", function() {
    connect.server({
        root: "build",
        livereload: true
    });
});

gulp.task("gulp:html", function() {
    gulp.src(path.src.pug)
    .pipe(pug())
    .pipe(gulp.dest(path.build.html))
    .pipe(connect.reload());
});

gulp.task("gulp:css", function() {
    gulp.src(path.src.styles)
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', '>1%', 'ie9'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest(path.build.css))
    .pipe(connect.reload());
});

gulp.task('gulp:watch', function() {
    gulp.watch(path.watch.pug,   ['gulp:html']);
    gulp.watch(path.watch.styles, ['gulp:css']);
});

gulp.task('default', ['gulp:connect', 'gulp:html', 'gulp:css', 'gulp:watch']);
