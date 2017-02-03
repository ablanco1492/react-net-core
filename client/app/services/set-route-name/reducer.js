const initState = {};

export default (state = initState, action) => {
	switch (action.type) {
	case 'SET_ROUTE_NAME':
		return { ...state, currentRoute: action.payload };
	default:
		return state;
	}
}