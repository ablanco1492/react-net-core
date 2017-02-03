var config = {
	port: {
		server: 8000,
		client: 3000
	},

	root: 'client/dist',

	staticIndex: 'client/dist/index.html',

	server: {
		main: './server/dist/index.js'
	},

	js: {
		appMain: 'client/app/app.init.jsx',
		watch: [
			'client/app/app.init.jsx',
			'client/app/app.routes.jsx',
			'client/app/**/**/*.jsx',
			'client/app/**/**/*.js'
		],
		extensions: [
			'.jsx',
			'.js'
		],
		presets: [
			"es2015",
			"react"
		],
		plugins: [
			'transform-regenerator',
			'syntax-decorators',
			'syntax-object-rest-spread',
			'transform-object-rest-spread',
			'transform-decorators-legacy'
		],
		outputName: 'bundle.js',
		dest: 'client/dist/src/js',
		deps: [
			'axios',
			'react',
			'react-dom',
			'react-redux',
			'react-router',
			'redux',
			'redux-logger',
			'redux-promise',
			'redux-promise-middleware',
			'redux-thunk',
			'classnames',
			'material-ui',
			'react-tap-event-plugin',
			'moment',
			'crypto'
		]
	},

	css: {
		sassMain: 'client/scss/main.scss',
		outputStyle: 'compressed',
		dest: 'client/dist/src/css',
		watch: 'client/scss/**/*.scss'
	},

	ts: {
		src: ['server/**/*.ts', '!server/dist'],
		dest: 'server/dist'
	},

	lint: {
		es: {
			src: ['./client/app/**/*.js',
				'./client/app/**/*.jsx',
				'!node_modules/**'
			]
		},

		ts: {
			src: ['server/**/*.ts', '!server/dist']
		}
	},

	copy: {
		index: {
			src: 'client/index.html',
			dest: 'client/dist'
		},

		js: {
			src: 'client/assets/javascripts/**',
			dest: 'client/dist/src/js'
		},

		css: {
			src: 'client/assets/stylesheets/**',
			dest: 'client/dist/src/css'
		},

		img: {
			src: 'client/assets/images/**',
			dest: 'client/dist/src/img'
		},

		fonts: {
			src: 'client/assets/fonts/**',
			dest: 'client/dist/src/fonts'
		},

		toServer: {
			index: {
				src: 'client/dist/index.html',
				dest: 'java-server/src/main/resources/static'
			},
			public: {
				src: 'client/dist/src/**',
				dest: 'java-server/src/main/resources/public/src'
			}
		}
	},

	getUri: function(side) {
		return 'http://localhost:' + this.port[side];
	}
};

module.exports = config;