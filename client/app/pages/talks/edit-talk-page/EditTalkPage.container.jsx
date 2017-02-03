import { connect } from 'react-redux';
import EditTalkPage from './EditTalkPage.component';
import { fetchTalk, editTalk } from '../details-talk-page/actions';

const mapState = store => {
	return {
		textInputs: store.textInputs,
		talk: store.talkDetails
	}; 
};

const mapDispatch = dispatch => {
	return {
		fetchTalk: (id) => dispatch(fetchTalk(id)),
		editTalk: (id, data) => dispatch(editTalk(id, data))
	};
}


export default connect(mapState, mapDispatch)(EditTalkPage);