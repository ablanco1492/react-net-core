import Api from '../../services/Api';

const api = new Api();


const fetchTalks = () => dispatch => api.call('talks').then(response => {
	const action = {
		type: 'TALKS_FETCH',
		payload: response.data
	};
	dispatch(action);
});


const createTalk = (data, cb) => dispatch => api.call('talks', 'post', data).then(response => {
	const action = {
		type: 'TALKS_CREATE',
		payload: response.data
	};
	dispatch(action);
	console.log(cb)
	if (cb) {
		cb();
	}
});



export { fetchTalks, createTalk };