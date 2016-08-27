gulp = require('gulp')

gulp.task('copy:all', ['copy:phaser', 'copy:assets', 'copy:main'])

gulp.task('copy:phaser', function() {
  gulp.src('node_modules/phaser/build/phaser.min.js')
  .pipe(gulp.dest('build/'))
})

gulp.task('copy:assets', function() {
  gulp.src('assets/**/*')
  .pipe(gulp.dest('build/assets'))
})

gulp.task('copy:main', function() {
  gulp.src(['main.js', 'package.json'])
  .pipe(gulp.dest('build'))
})
