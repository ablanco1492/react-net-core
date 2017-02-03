import { connect } from 'react-redux';
import Form from './Form.component';
import { formInit } from './text-input/actions';

const mapState = store => {
	return {
		textInputs: store.textInputs
	}; 
};

const mapDispatch = dispatch => {
	return {
		formInit: (formId) => dispatch(formInit(formId))
	};
}


export default connect(mapState, mapDispatch)(Form);