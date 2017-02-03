import { connect } from 'react-redux';
import DetailsTalkPage from './DetailsTalkPage.component';
import { fetchTalk, deleteTalk } from './actions';

const mapState = store => {
	return {
		talk: store.talkDetails
	}; 
};

const mapDispatch = dispatch => {
	return {
		fetchTalk: (id) => dispatch(fetchTalk(id)),
		deleteTalk: (id, cb) => dispatch(deleteTalk(id, cb))
	};
}


export default connect(mapState, mapDispatch)(DetailsTalkPage);