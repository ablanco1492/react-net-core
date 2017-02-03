import store from '../../app.store';

const routesNameMap = [
	{
		name: 'Talks',
		path: '/'
	},

	{
		name: 'CreateTalks',
		path: '/create'
	},

	{
		name: 'DetailsTalk',
		path: '/details/:id'
	}
];

const setRouteNameAction = routeName => {
	return {
		type: 'SET_ROUTE_NAME',
		payload: routeName
	};
};

const setRouteName = (previousRoute, nextRoute) => {
	const route = routesNameMap.find(route => route.path === nextRoute.location.pathname);
	if (previousRoute.location.pathname !== nextRoute.location.pathname) {
		store.dispatch(setRouteNameAction(route.name));
	}
}

const setRouteNameOnEnter = () => {
	const route = routesNameMap.find(route => route.path === window.location.hash.replace('#', ''));

	store.dispatch(setRouteNameAction(route.name));
}

export { setRouteName, setRouteNameOnEnter };