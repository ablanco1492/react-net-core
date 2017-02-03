 const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case 'TALKS_FETCH':
			return [ ...action.payload ];
		default:
			return state;
	}
}