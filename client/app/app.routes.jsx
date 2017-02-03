import React from 'react';
import { Route, IndexRoute, browserHistory  } from 'react-router';
import { setRouteName, setRouteNameOnEnter } from './services/set-route-name/set-route-name';

// Route Components
import Main from './pages/main/Main.component';
import TalksPage from './pages/talks/TalksPage.container';
import CreateTalkPage from './pages/talks/create-talk-page/CreateTalkPage.container';
import DetailsTalkPage from './pages/talks/details-talk-page/DetailsTalkPage.container'
import EditTalkPage from './pages/talks/edit-talk-page/EditTalkPage.container'
const routes = (
	<div>
		<Route path="/" component={Main} history={browserHistory} >
			<IndexRoute component={TalksPage}/>
			<Route path="/create" component={CreateTalkPage}/>
			<Route path="/details/:id" component={DetailsTalkPage}/>
			<Route path="/edit/:id" component={EditTalkPage}/>
		</Route>
	</div>
);


export default routes;
