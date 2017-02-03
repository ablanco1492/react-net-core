import { connect } from 'react-redux';
import CreateTalkPage from './CreateTalkPage.component';
import { createTalk } from '../actions';

const mapState = store => {
	return {
		textInputs: store.textInputs
	}; 
};

const mapDispatch = dispatch => {
	return {
		createTalk: (data, cb) => dispatch(createTalk(data, cb))
	};
}


export default connect(mapState, mapDispatch)(CreateTalkPage);