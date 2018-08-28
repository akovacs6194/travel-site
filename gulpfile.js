var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("Horray");
});

gulp.task('html', function(){
	console.log("Imagine something useful being done to your html here");
});

gulp.task('styles', function(){
	console.log("Imagine sass or PostCSS tasks running here");
});

gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/Styles/**/*.css', function() {
		gulp.start('styles');
	});


});