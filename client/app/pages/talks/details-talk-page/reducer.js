 const initState = {};

export default (state = initState, action) => {
	switch (action.type) {
		case 'TALK_FETCH':
			return  action.payload ;
		default:
			return state;
	}
}