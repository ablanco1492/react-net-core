import { connect } from 'react-redux';
import TalksPage from './TalksPage.component';
import { fetchTalks } from './actions';

const mapState = store => {
	return {
		talks: store.talks
	}; 
};

const mapDispatch = dispatch => {
	return {
		fetchTalks: () => dispatch(fetchTalks())
	};
}


export default connect(mapState, mapDispatch)(TalksPage);