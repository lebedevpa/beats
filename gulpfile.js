const { src, dest, task } = require( 'gulp' )
var rm = require( 'gulp-rm' )
 
task( 'clean', () => {
  return src( '/dist/**/*', { read: false })

    .pipe( rm() )
});

function copy () {
    return src("/styles/*.scss").pipe(dest("dist"));
}

exports.copy = copy;

