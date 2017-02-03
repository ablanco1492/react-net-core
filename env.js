var env = {
	dev: {
		environment: 'dev',
		apiUrl: 'http://localhost:8080/api'
	},

	prod: {
		environment: 'prod',
		apiUrl: '/api'
	}
};

module.exports = env;