import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './app.routes';
import store from './app.store';

injectTapEventPlugin();

const initApp = () => {
	render(
		<Provider store={store}>
			<Router history={hashHistory}>{routes}</Router>
		</Provider>, document.getElementById('app-wrapper')
	);
}

store.dispatch(initApp);