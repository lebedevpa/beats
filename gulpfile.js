const { src, dest, parallel , series , watch ,task } = require('gulp');
const browserSync = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: {baseDir: '/'}
  })
}

exports.browsersync = browsersync;