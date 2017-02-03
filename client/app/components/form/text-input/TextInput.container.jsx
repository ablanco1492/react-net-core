import { connect } from 'react-redux';
import TextInput from './TextInput.component';
import * as inputActions from './actions';

const mapState = (store, props) => {
	return {
		input: store.textInputs[props.formId][props.id],
	};
};

const mapDispatch = (dispatch, props) => {
	return {
		init: () => dispatch(inputActions.inputInit(props.formId, props.id, props.value)),
		destroy: () => dispatch(inputActions.inputDestroy(props.id)),
		inputChange: text => dispatch(inputActions.inputChange(props.formId, props.id, text)),
		inputIsValid: isValid => dispatch(inputActions.inputIsValid(props.id, isValid))
	};
}

export default connect(mapState, mapDispatch)(TextInput);