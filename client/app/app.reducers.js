import { combineReducers } from 'redux';

// Components
import menuMobile from './components/app-header/reducer';
import textInputs from './components/form/text-input/reducer';

//Pages
import talks from './pages/talks/reducer';
import talkDetails from './pages/talks/details-talk-page/reducer';

// Services
import routeName from './services/set-route-name/reducer';

const combinedreducers = combineReducers({
	menuMobile,
	textInputs,
	routeName,
	talks,
	talkDetails
});

export default combinedreducers;
