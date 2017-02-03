const initState = {
	open: false
};

export default (state = initState, action) => {
	switch (action.type) {
	case 'MOBILE_MENU_TOGGLE':
		return { ...state, open: !state.open };

	case 'MOBILE_MENU_OPEN':
		return { ...state, open: true };

	case 'MOBILE_MENU_CLOSE':
		return { ...state, open: false };

	default:
		return state;
	}
}