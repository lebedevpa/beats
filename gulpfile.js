const { src, dest, parallel , series , watch , task } = require('gulp');
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const cleanCSS = require('gulp-clean-css');
const gcmq = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');

sass.compiler = require('node-sass');


task( 'clean', () => {
  return src( 'dist/**/*', { read: false }).pipe( rm() )
});

task('copy:html', () => {
  return src('./*.html')
  .pipe(dest('dist'))
  .pipe(reload({ stream: true}));
});
task('copy:img', () => {
  return src('./img/**/*', )
  .pipe(dest('dist/img'))
  .pipe(reload({ stream: true}));
});

const styles = [
  'node_modules/normalize.css/normalize.css',
  'styles/main.scss'
]

task('styles', () => {
  return src(styles)
  .pipe(sourcemaps.init())
  .pipe(concat('main.scss'))
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(gcmq())
  // .pipe(px2rem())
  .pipe(
    autoprefixer({
      browsers: ["last 2 versions"],
      cascade: true
    })
  )
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(sourcemaps.write())
  .pipe(dest('dist'));
});


task('scripts', () => {
  return src('js/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('main.js', {newLine: ";"}))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(dest('dist'));
});

task('icons', () => {
  return src('img/svg/*.svg')
    .pipe(svgo({
      plugins: [
        {
          removeAttrs: { 
            attrs: '(fill|stroke|style|width|height|data.*)'
          } 
        }
      ]
    })
    )
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "../../sprite.svg"
        }
      }
    }))
    .pipe(dest('dist/img/svg/'))
})

task('server', () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

watch('./styles/**/*.scss', series('styles'));
watch('./*.html', series('copy:html'));
watch('./js/**/*.js', series('scripts'));
task('default', series('clean', 'copy:html', 'copy:img','styles', 'icons', 'scripts', 'server'));


