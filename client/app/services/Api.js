import axios from 'axios';
import constants from '../app.constants';

export default class Api {
	constructor(options = {}) {
		const instanceOptions = { ...options, baseURL: constants.apiUrl }

		this.axios = axios.create(instanceOptions);
	}

	call(url, method = 'get', data = null) {
		return this.axios({
			method: method,
			url: this.formatUrl(url),
			data: data
		});
	}

	formatUrl(url) {
		if (url.charAt(0) === '/') {
			url;
		} else {
			return '/' + url;
		}
	}
}