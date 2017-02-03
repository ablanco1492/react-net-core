import Api from '../../../services/Api';

const api = new Api();


const fetchTalk = (id) => dispatch => api.call('talks/' + id ).then(response => {
	const action = {
		type: 'TALK_FETCH',
		payload: response.data
	};
	dispatch(action);
});

const editTalk = (data, cb) => dispatch => api.call('talks', 'put', data ).then(response => {
	const action = {
		type: 'TALK_EDIT',
		payload: response.data
	};
	dispatch(action);

	if (cb) {
		cb();
	}
});

const deleteTalk = (id, cb) => dispatch => api.call('talks/' + id, 'delete').then(response => {
	const action = {
		type: 'TALK_DELETE',
		payload: response.data
	};
	dispatch(action);

	if (cb) {
		cb();
	}
});



export { fetchTalk, deleteTalk, editTalk };