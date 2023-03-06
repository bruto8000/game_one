import concat from 'gulp-concat';

export const css = () => {
	return app.gulp.src(app.path.src.css, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "CSS",
				message: "Error: <%= error.message %>"
			})))
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(concat("main.css"))
        .pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
        }