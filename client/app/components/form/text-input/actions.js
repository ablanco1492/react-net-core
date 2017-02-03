const formInit = (formId) => {
	return {
		type: 'FORM_INIT',
		payload: {
			formId: formId
		}
	};
};

const inputInit = (formId, inputId, value = '') => {
	return {
		type: 'TEXT_INPUT_INIT',
		payload: {
			formId: formId,
			inputId: inputId,
			value: value,
			isValid: true
		}
	};
};

const inputDestroy = id => {
	return {
		type: 'TEXT_INPUT_DESTROY',
		payload: id
	};
};

const inputChange = (formId, inputId, text) => {
	return {
		type: 'TEXT_INPUT_CHANGE',
		payload: {
			formId,
			inputId,
			text
		}
	};
};

const inputIsValid = (formId, inputId, idValid) => {
	return {
		type: 'TEXT_INPUT_IS_VALID',
		payload: {
			formId,
			inputId,
			idValid
		}
	};
};

export { formInit, inputInit, inputDestroy, inputChange, inputIsValid };