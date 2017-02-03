var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer'),
	open = require('gulp-open'),
	buffer = require('vinyl-buffer'),
	uglify = require('gulp-uglify'),
	fs = require('fs'),
	resolve = require('resolve'),
	runSequence = require('run-sequence'),
	envify = require('gulp-envify'),
	eslint = require('gulp-eslint'),
	tslint = require("gulp-tslint"),
	ts = require('gulp-typescript'),
	nodemon = require('gulp-nodemon'),
	del = require('del'),
	config = require('./gulp.config');

gulp.task('client-server', function() {
	connect.server({
		root: config.root,
		livereload: true,
		port: config.port.client
	});

	gulp.src(config.staticIndex).pipe(open({ uri: config.getUri('client') }));
});

gulp.task('sass', function() {
	return gulp.src(config.css.sassMain)
	    .pipe(sourcemaps.init())
	    .pipe(sass({outputStyle: config.css.outputStyle}).on('error', sass.logError))
	    .pipe(autoprefixer())
	    .pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest(config.css.dest))
	    .pipe(connect.reload());
});

gulp.task('sass-dist', function() {
	return gulp.src(config.css.sassMain)
	    .pipe(sass({outputStyle: config.css.outputStyle}).on('error', sass.logError))
	    .pipe(autoprefixer())
	    .pipe(gulp.dest(config.css.dest))
	    .pipe(connect.reload());
});

gulp.task('build-app', function() {
	var packageJson = require('./package.json'),
		dependencies = Object.keys(packageJson && packageJson.dependencies || {});

	browserify({
	    entries: config.js.appMain,
		extensions: config.js.extensions,
		debug: true
	})
	.external(dependencies)
	.transform(babelify, {presets: config.js.presets, plugins: config.js.plugins})
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source(config.js.outputName))
	.pipe(buffer())
	.pipe(gulp.dest(config.js.dest))
	.pipe(connect.reload());
});

gulp.task('build-app-dist', function() {
	process.env.NODE_ENV = 'production';
	
	var packageJson = require('./package.json'),
		dependencies = Object.keys(packageJson && packageJson.dependencies || {});

	browserify({
	    entries: config.js.appMain,
		extensions: config.js.extensions,
		debug: false
	})
	.external(dependencies)
	.transform(babelify, {presets: config.js.presets, plugins: config.js.plugins})
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source(config.js.outputName))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest(config.js.dest))
	.pipe(connect.reload());
});

gulp.task('build-vendor', function () {
	var b = browserify({
		extensions: config.js.extensions,
	});

	var dependencies = config.js.deps;

	getNPMPackageIds().forEach(function (id) {
		if (dependencies.indexOf(id) >= 0) {
			b.require(resolve.sync(id), { expose: id });
		}
	});

	var stream = b
		.transform(envify({
	        _: 'purge',
	        NODE_ENV: 'production'
	    }))
		.bundle()
		.on('error', function(err){
			console.log(err.message);
			this.emit('end');
		})
		.pipe(source('vendor.js'))
		.pipe(buffer())
		.pipe(uglify());

	stream.pipe(gulp.dest(config.js.dest));

	return stream;
});

gulp.task('build-server', function() {
	var configTs = config.ts;

	return gulp.src(configTs.src)
        .pipe(ts())
		.pipe(uglify())
   		.pipe(gulp.dest(configTs.dest))
});

gulp.task('run-server', function() {
	var stream = nodemon({
		script: config.server.main,
		ext:    'js ts',
		ignore: ['server/dist'],
		watch: config.ts.src,
		tasks: ['build-server']
	});

	return stream;
});

gulp.task('copy', function() {
	var copy = config.copy;

	gulp.src(copy.index.src)
		.pipe(gulp.dest(copy.index.dest));

	gulp.src(copy.js.src)
		.pipe(gulp.dest(copy.js.dest));

	gulp.src(copy.css.src)
		.pipe(gulp.dest(copy.css.dest));

	gulp.src(copy.img.src)
		.pipe(gulp.dest(copy.img.dest));

	return gulp.src(copy.fonts.src)
		.pipe(gulp.dest(copy.fonts.dest));
});

gulp.task('copy-to-java', function() {
	var copy = config.copy.toServer;

	gulp.src(copy.index.src)
		.pipe(gulp.dest(copy.index.dest));

	return gulp.src(copy.public.src)
		.pipe(gulp.dest(copy.public.dest));
});

gulp.task('build-constants', function() {
	if (process.argv[2] === undefined) {
		writeEnv();
	} else {
		writeEnv(process.argv[2]);
	}
});

gulp.task('watch', function(){
	gulp.watch(config.css.watch, ['sass']);
	gulp.watch(config.js.watch, ['build-app']);
	gulp.watch(config.staticIndex, ['reload']);
});

gulp.task('eslint', function() {
	var lintConfig = config.lint;

    return gulp.src(lintConfig.es.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("tslint", function() {
	var configLint = config.lint.ts;

    return gulp.src(configLint.src)
        .pipe(tslint())
        .pipe(tslint.report());
});

function getNPMPackageIds() {
	var packageManifest = {};

	try {
		packageManifest = require('./package.json');
	} catch (e) {
		console.log(e);
	}

	return Object.keys(packageManifest.dependencies) || [];
}

function writeEnv(env) {
	if (env === undefined) {
		env = 'dev';
	}

	if (env !== 'dev' && env !== 'prod') {
		env = 'dev';
	}

	var fs = require('fs'),
		env = require('./env')[env],
		envStr = JSON.stringify(env),
		fileContent = 'const constants = ' + envStr + '; export default constants;',
		folder = __dirname + '/client/app/app.constants.js';
	
	fs.writeFile(folder, fileContent, function(err) {
	    if (err) {
	    	return console.log(err);
	    }
	});
}


// Local tasks
gulp.task('default', function() {
	del(['server/dist', 'client/dist']).then(function() {
		runSequence('build-constants', 'build-server', 'build-vendor', 'build-app', 'copy', 'sass', 'watch', 'client-server', 'run-server');
	});
});

gulp.task('client', function() {
	del('client/dist').then(function() {
		runSequence('build-constants', 'build-vendor', 'build-app', 'copy', 'sass', 'watch', 'client-server');
	});
});

gulp.task('server', function() {
	del('server/dist').then(function() {
		runSequence('build-server', 'run-server');
	});
});

// Build production task
gulp.task('prod', function() {
	del(['server/dist', 'client/dist']).then(function() {
		runSequence('build-constants', 'build-server', 'build-vendor', 'build-app-dist', 'sass-dist', 'copy', 'copy-to-java');
	});
});
