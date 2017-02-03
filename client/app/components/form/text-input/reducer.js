const initState = {};

export default (state = initState, action) => {
	switch(action.type) {
	case 'FORM_INIT':
		return {...state, [action.payload.formId]: {} };
	case 'TEXT_INPUT_INIT':
		return { ...state, [action.payload.formId]: { ...state[action.payload.formId], [action.payload.inputId]: action.payload } };
	case 'TEXT_INPUT_DESTROY': {
		let newState = { ...state };
		delete newState[action.payload];
		return newState;
	}
	case 'TEXT_INPUT_CHANGE':
		return { ...state, [action.payload.formId]: { ...state[action.payload.formId], [action.payload.inputId]: { ...state[action.payload.formId][action.payload.inputId], value: action.payload.text } } };
	case 'TEXT_INPUT_IS_VALID':
		return { ...state, [action.payload.formId]: { ...state[action.payload.formId], [action.payload.inputId]: { ...state[action.payload.formId][action.payload.inputId], isValid: action.payload.isValid } } };
	default:
		return state;
	}
}