import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './app.reducers';
import constants from './app.constants';

const getMiddlewares = () => {
	if (constants.environment === 'dev') {
		return applyMiddleware(thunk, logger());
	} else if (constants.environment === 'prod') {
		return applyMiddleware(thunk);
	}
}

const middlewares = getMiddlewares();
const store = createStore(reducers, middlewares);

export default store;