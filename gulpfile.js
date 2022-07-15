const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const { watchFile } = require('fs');
const { stream } = require('browser-sync');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
const gulpif = require("gulp-if");
const { DOCS_PATH, SRC_PATH, STYLES_LIBS, JS_LIBS } = require("./gulp.config");

const env = process.env.NODE_ENV;

task('clean', () => {
    return src(`${DOCS_PATH}/**/*`, { read: false }).pipe(rm())
});

task('cleanDist', () => {
    return src("./dist/**/*", { read: false })
        .pipe(rm())
});

task('copy:html', () => {
    return src(`${SRC_PATH}/*.html`)
        .pipe(dest(DOCS_PATH))
        .pipe(dest('./dist'))
        .pipe(reload({ stream: true }));
});

task('copy:img', () => {
    return src(`${SRC_PATH}/img/**/*`)
        .pipe(dest(`${DOCS_PATH}/img/`))
        .pipe(dest('./dist/img'))
        .pipe(reload({ stream: true }));

});

task('copy:video', () => {
    return src(`${SRC_PATH}/*.mp4`)
        .pipe(dest(DOCS_PATH))
        .pipe(dest('./dist'))
        .pipe(reload({ stream: true }));

});





task("styles", () => {
    return src([...STYLES_LIBS, 'src/css/components/main.scss'])
        .pipe(gulpif(env == 'dev', sourcemaps.init()))
        .pipe(concat("main.min.scss"))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(env == 'dev',
            autoprefixer({
                cascade: false
            })
        ))
        .pipe(gulpif(env == 'prod', gcmq()))
        .pipe(gulpif(env == 'prod', cleanCSS()))
        .pipe(gulpif(env == 'dev', sourcemaps.write()))
        .pipe(dest(DOCS_PATH))
        .pipe(dest('./dist'))
        .pipe(reload({ stream: true }));

});


task('scripts', () => {
    return src([...JS_LIBS, "src/js/*.js"])
        .pipe(gulpif(env == 'dev', sourcemaps.init()))
        .pipe(concat("main.min.js", { newLine: ";" }))
        .pipe(gulpif(env == 'prod', babel({
            presets: ['@babel/env']
        })))
        .pipe(gulpif(env == 'prod', uglify()))
        .pipe(gulpif(env == 'dev', sourcemaps.write()))
        .pipe(dest(DOCS_PATH))
        .pipe(dest('./dist'))
        .pipe(reload({ stream: true }));
});


task("icons", () => {
    return src(`${SRC_PATH}/*.svg`)
        .pipe(dest(DOCS_PATH))
        .pipe(dest('./dist'))
});


task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});



task("watch", () => {
    watch('./src/css/**/*.scss', series('styles'));
    watch('./src/*.html', series('copy:html'));
    watch('./src/js/*.js', series('scripts'));
    watch('./src/img/svg/*.svg', series('icons'));

});

task(
    "default",
    series(
        "clean", "cleanDist",
        parallel("copy:html", "copy:video", "copy:img", "styles", "scripts", "icons"),
        parallel('watch', 'server')
    ));


task(
    "build",
    series(
        "clean", "cleanDist",
        parallel("copy:html", "copy:video", "copy:img", "styles", "scripts", "icons")
    ));