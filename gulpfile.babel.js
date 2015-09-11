import gulp from 'gulp'
import subtree from 'gulp-subtree'
import clean from 'gulp-clean'

gulp.task('deploy-site', () => {
  gulp.src(['./build'])
    .pipe(subtree({
      remoteUrl: 'git@github.com:LightBulb/LightBulb.github.io.git',
      branch: 'master',
      message: 'Update Site'
    }))
    .pipe(clean())
})

gulp.task('clean', () => {
  gulp.src('./build/js')
    .pipe(clean())
})
