var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/Styles/**/*.css', function() {
		gulp.start('cssInject');
	});
	/* changed task from 'styles' to 'cssInject' , set 'styles' as a 
	dependency within cssInject task below */  
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});