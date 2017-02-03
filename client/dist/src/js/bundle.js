(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var constants = { "environment": "dev", "apiUrl": "http://localhost:5000/api" };exports.default = constants;

},{}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _app = require('./app.routes');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.store');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

var initApp = function initApp() {
	(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: _app4.default },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: _reactRouter.hashHistory },
			_app2.default
		)
	), document.getElementById('app-wrapper'));
};

_app4.default.dispatch(initApp);

},{"./app.routes":4,"./app.store":5,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-tap-event-plugin":"react-tap-event-plugin"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reducer = require('./components/app-header/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./components/form/text-input/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./pages/talks/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require('./pages/talks/details-talk-page/reducer');

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = require('./services/set-route-name/reducer');

var _reducer10 = _interopRequireDefault(_reducer9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combinedreducers = (0, _redux.combineReducers)({
	menuMobile: _reducer2.default,
	textInputs: _reducer4.default,
	routeName: _reducer10.default,
	talks: _reducer6.default,
	talkDetails: _reducer8.default
});

// Services


//Pages


// Components
exports.default = combinedreducers;

},{"./components/app-header/reducer":9,"./components/form/text-input/reducer":15,"./pages/talks/details-talk-page/reducer":25,"./pages/talks/reducer":28,"./services/set-route-name/reducer":31,"redux":"redux"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _setRouteName = require('./services/set-route-name/set-route-name');

var _Main = require('./pages/main/Main.component');

var _Main2 = _interopRequireDefault(_Main);

var _TalksPage = require('./pages/talks/TalksPage.container');

var _TalksPage2 = _interopRequireDefault(_TalksPage);

var _CreateTalkPage = require('./pages/talks/create-talk-page/CreateTalkPage.container');

var _CreateTalkPage2 = _interopRequireDefault(_CreateTalkPage);

var _DetailsTalkPage = require('./pages/talks/details-talk-page/DetailsTalkPage.container');

var _DetailsTalkPage2 = _interopRequireDefault(_DetailsTalkPage);

var _EditTalkPage = require('./pages/talks/edit-talk-page/EditTalkPage.container');

var _EditTalkPage2 = _interopRequireDefault(_EditTalkPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
	'div',
	null,
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _Main2.default, history: _reactRouter.browserHistory },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _TalksPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/create', component: _CreateTalkPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/details/:id', component: _DetailsTalkPage2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '/edit/:id', component: _EditTalkPage2.default })
	)
);

// Route Components
exports.default = routes;

},{"./pages/main/Main.component":16,"./pages/talks/TalksPage.container":18,"./pages/talks/create-talk-page/CreateTalkPage.container":21,"./pages/talks/details-talk-page/DetailsTalkPage.container":23,"./pages/talks/edit-talk-page/EditTalkPage.container":27,"./services/set-route-name/set-route-name":32,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _app = require('./app.reducers');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.constants');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMiddlewares = function getMiddlewares() {
	if (_app4.default.environment === 'dev') {
		return (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)());
	} else if (_app4.default.environment === 'prod') {
		return (0, _redux.applyMiddleware)(_reduxThunk2.default);
	}
};

var middlewares = getMiddlewares();
var store = (0, _redux.createStore)(_app2.default, middlewares);

exports.default = store;

},{"./app.constants":1,"./app.reducers":3,"redux":"redux","redux-logger":"redux-logger","redux-thunk":"redux-thunk"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
	mobileMenu: _react2.default.PropTypes.object.isRequired,
	openMenuMobile: _react2.default.PropTypes.func.isRequired,
	closeMenuMobile: _react2.default.PropTypes.func.isRequired,
	toggleMenuMobile: _react2.default.PropTypes.func.isRequired
};

var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(
		'header',
		{ className: 'mainHeader' },
		_react2.default.createElement(
			'div',
			{ className: 'navbar navbar-fixed-top' },
			_react2.default.createElement(
				'div',
				{ className: 'container-fluid' },
				_react2.default.createElement(
					'div',
					{ className: 'navbar-header' },
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
						_react2.default.createElement(
							'span',
							{ className: 'sr-only' },
							'Toggle navigation'
						),
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' })
					),
					_react2.default.createElement(
						'a',
						{ href: '#', className: 'nav-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
						_react2.default.createElement('i', null)
					),
					_react2.default.createElement(
						'a',
						{ className: 'navbar-brand' },
						'Power Hour Talks'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'navbar-collapse collapse' },
					_react2.default.createElement(
						'ul',
						{ className: 'nav navbar-nav' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/' },
								'Home'
							)
						)
					)
				)
			)
		)
	);
};

AppHeader.propTypes = propTypes;

exports.default = AppHeader;

},{"material-ui":"material-ui","react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _AppHeader = require('./AppHeader.component');

var _AppHeader2 = _interopRequireDefault(_AppHeader);

var _actions = require('./actions');

var mobileMenu = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(store) {
	return {
		mobileMenu: store.menuMobile,
		routeName: store.routeName
	};
};

var mapDispatch = function mapDispatch(dispatch) {
	return {
		openMenuMobile: function openMenuMobile() {
			return dispatch(mobileMenu.open());
		},
		closeMenuMobile: function closeMenuMobile() {
			return dispatch(mobileMenu.close());
		},
		toggleMenuMobile: function toggleMenuMobile(flag) {
			return dispatch(mobileMenu.toggle(flag));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_AppHeader2.default);

},{"./AppHeader.component":6,"./actions":8,"react-redux":"react-redux"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toggle = toggle;
exports.open = open;
exports.close = close;
function toggle(flag) {
	return {
		type: 'MOBILE_MENU_TOGGLE',
		payload: !flag
	};
}

function open() {
	return {
		type: 'MOBILE_MENU_OPEN'
	};
}

function close() {
	return {
		type: 'MOBILE_MENU_CLOSE'
	};
}

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initState = {
	open: false
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case 'MOBILE_MENU_TOGGLE':
			return _extends({}, state, { open: !state.open });

		case 'MOBILE_MENU_OPEN':
			return _extends({}, state, { open: true });

		case 'MOBILE_MENU_CLOSE':
			return _extends({}, state, { open: false });

		default:
			return state;
	}
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	id: _react2.default.PropTypes.string.isRequired,
	content: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element])
};

var Form = function (_React$PureComponent) {
	_inherits(Form, _React$PureComponent);

	function Form() {
		_classCallCheck(this, Form);

		return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	}

	_createClass(Form, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.formInit(this.props.id);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ id: this.props.id },
				this.props.children || this.props.content
			);
		}
	}]);

	return Form;
}(_react2.default.PureComponent);

exports.default = Form;


Form.propTypes = propTypes;

},{"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _Form = require('./Form.component');

var _Form2 = _interopRequireDefault(_Form);

var _actions = require('./text-input/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(store) {
	return {
		textInputs: store.textInputs
	};
};

var mapDispatch = function mapDispatch(dispatch) {
	return {
		formInit: function formInit(formId) {
			return dispatch((0, _actions.formInit)(formId));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_Form2.default);

},{"./Form.component":10,"./text-input/actions":14,"react-redux":"react-redux"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	init: _react2.default.PropTypes.func.isRequired,
	destroy: _react2.default.PropTypes.func.isRequired,
	inputChange: _react2.default.PropTypes.func.isRequired,
	inputIsValid: _react2.default.PropTypes.func,
	id: _react2.default.PropTypes.string.isRequired,
	name: _react2.default.PropTypes.string.isRequired,
	label: _react2.default.PropTypes.string.isRequired,
	errorMessage: _react2.default.PropTypes.string.isRequired,
	type: _react2.default.PropTypes.string.isRequired,
	value: _react2.default.PropTypes.string,
	required: _react2.default.PropTypes.bool
};

var defaultProps = {
	value: ''
};

var TextInput = function (_React$Component) {
	_inherits(TextInput, _React$Component);

	function TextInput(props) {
		_classCallCheck(this, TextInput);

		return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));
	}

	_createClass(TextInput, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.init(this.formId, this.id, this.value);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.props.destroy(this.id);
		}
	}, {
		key: 'inputOnChange',
		value: function inputOnChange(event) {
			this.props.inputChange(event.target.value);
		}
	}, {
		key: 'isValid',
		value: function isValid(value) {
			var isValid = true;

			if (this.props.required && !value) {
				isValid = false;
			} else if (this.props.type === 'email') {
				isValid = this.validate.email(value);
			}

			return isValid;
		}
	}, {
		key: 'render',
		value: function render() {
			var value = this.props.input ? this.props.input.value : '';
			return _react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					{ htmlFor: this.props.id, className: 'control-label' },
					this.props.label
				),
				_react2.default.createElement('input', { type: this.props.type, htmlFor: this.props.name, className: 'form-control input-lg', onChange: this.inputOnChange.bind(this), value: value })
			);
		}
	}]);

	return TextInput;
}(_react2.default.Component);

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

exports.default = TextInput;

},{"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _TextInput = require('./TextInput.component');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _actions = require('./actions');

var inputActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(store, props) {
	return {
		input: store.textInputs[props.formId][props.id]
	};
};

var mapDispatch = function mapDispatch(dispatch, props) {
	return {
		init: function init() {
			return dispatch(inputActions.inputInit(props.formId, props.id, props.value));
		},
		destroy: function destroy() {
			return dispatch(inputActions.inputDestroy(props.id));
		},
		inputChange: function inputChange(text) {
			return dispatch(inputActions.inputChange(props.formId, props.id, text));
		},
		inputIsValid: function inputIsValid(isValid) {
			return dispatch(inputActions.inputIsValid(props.id, isValid));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_TextInput2.default);

},{"./TextInput.component":12,"./actions":14,"react-redux":"react-redux"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var formInit = function formInit(formId) {
	return {
		type: 'FORM_INIT',
		payload: {
			formId: formId
		}
	};
};

var inputInit = function inputInit(formId, inputId) {
	var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	return {
		type: 'TEXT_INPUT_INIT',
		payload: {
			formId: formId,
			inputId: inputId,
			value: value,
			isValid: true
		}
	};
};

var inputDestroy = function inputDestroy(id) {
	return {
		type: 'TEXT_INPUT_DESTROY',
		payload: id
	};
};

var inputChange = function inputChange(formId, inputId, text) {
	return {
		type: 'TEXT_INPUT_CHANGE',
		payload: {
			formId: formId,
			inputId: inputId,
			text: text
		}
	};
};

var inputIsValid = function inputIsValid(formId, inputId, idValid) {
	return {
		type: 'TEXT_INPUT_IS_VALID',
		payload: {
			formId: formId,
			inputId: inputId,
			idValid: idValid
		}
	};
};

exports.formInit = formInit;
exports.inputInit = inputInit;
exports.inputDestroy = inputDestroy;
exports.inputChange = inputChange;
exports.inputIsValid = inputIsValid;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case 'FORM_INIT':
			return _extends({}, state, _defineProperty({}, action.payload.formId, {}));
		case 'TEXT_INPUT_INIT':
			return _extends({}, state, _defineProperty({}, action.payload.formId, _extends({}, state[action.payload.formId], _defineProperty({}, action.payload.inputId, action.payload))));
		case 'TEXT_INPUT_DESTROY':
			{
				var newState = _extends({}, state);
				delete newState[action.payload];
				return newState;
			}
		case 'TEXT_INPUT_CHANGE':
			return _extends({}, state, _defineProperty({}, action.payload.formId, _extends({}, state[action.payload.formId], _defineProperty({}, action.payload.inputId, _extends({}, state[action.payload.formId][action.payload.inputId], { value: action.payload.text })))));
		case 'TEXT_INPUT_IS_VALID':
			return _extends({}, state, _defineProperty({}, action.payload.formId, _extends({}, state[action.payload.formId], _defineProperty({}, action.payload.inputId, _extends({}, state[action.payload.formId][action.payload.inputId], { isValid: action.payload.isValid })))));
		default:
			return state;
	}
};

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppHeader = require('../../components/app-header/AppHeader.container');

var _AppHeader2 = _interopRequireDefault(_AppHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_AppHeader2.default, null),
		_react2.default.createElement(
			'div',
			{ className: 'body-content' },
			_react2.default.createElement(
				'div',
				{ className: 'page-heading' },
				_react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(
								'h1',
								{ className: 'page-heading-lead' },
								'Power Hour Talks',
								_react2.default.createElement('span', { className: 'border' })
							)
						)
					)
				)
			),
			props.children
		)
	);
};

},{"../../components/app-header/AppHeader.container":7,"react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _TalkCard = require('./talk-card/TalkCard.component');

var _TalkCard2 = _interopRequireDefault(_TalkCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    talks: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({})).isRequired,
    fetchTalks: _react2.default.PropTypes.func.isRequired
};

var TalksPage = function (_React$PureComponent) {
    _inherits(TalksPage, _React$PureComponent);

    function TalksPage() {
        _classCallCheck(this, TalksPage);

        return _possibleConstructorReturn(this, (TalksPage.__proto__ || Object.getPrototypeOf(TalksPage)).apply(this, arguments));
    }

    _createClass(TalksPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchTalks();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12 text-center mb30' },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { className: 'btn btn-primary', to: '/create' },
                            'Create talk'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    this.props.talks.map(function (talk, id) {
                        return _react2.default.createElement(_TalkCard2.default, { key: id, talk: talk });
                    })
                )
            );
        }
    }]);

    return TalksPage;
}(_react2.default.PureComponent);

exports.default = TalksPage;


TalksPage.propTypes = propTypes;

},{"./talk-card/TalkCard.component":29,"react":"react","react-router":"react-router"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _TalksPage = require('./TalksPage.component');

var _TalksPage2 = _interopRequireDefault(_TalksPage);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(store) {
	return {
		talks: store.talks
	};
};

var mapDispatch = function mapDispatch(dispatch) {
	return {
		fetchTalks: function fetchTalks() {
			return dispatch((0, _actions.fetchTalks)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_TalksPage2.default);

},{"./TalksPage.component":17,"./actions":19,"react-redux":"react-redux"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createTalk = exports.fetchTalks = undefined;

var _Api = require('../../services/Api');

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = new _Api2.default();

var fetchTalks = function fetchTalks() {
	return function (dispatch) {
		return api.call('talks').then(function (response) {
			var action = {
				type: 'TALKS_FETCH',
				payload: response.data
			};
			dispatch(action);
		});
	};
};

var createTalk = function createTalk(data, cb) {
	return function (dispatch) {
		return api.call('talks', 'post', data).then(function (response) {
			var action = {
				type: 'TALKS_CREATE',
				payload: response.data
			};
			dispatch(action);
			console.log(cb);
			if (cb) {
				cb();
			}
		});
	};
};

exports.fetchTalks = fetchTalks;
exports.createTalk = createTalk;

},{"../../services/Api":30}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Form = require('../../../components/form/Form.container');

var _Form2 = _interopRequireDefault(_Form);

var _TextInput = require('../../../components/form/text-input/TextInput.container');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {};

var FormID = 'createTalkForm';

var CreateTalksPage = function (_React$PureComponent) {
	_inherits(CreateTalksPage, _React$PureComponent);

	function CreateTalksPage() {
		_classCallCheck(this, CreateTalksPage);

		return _possibleConstructorReturn(this, (CreateTalksPage.__proto__ || Object.getPrototypeOf(CreateTalksPage)).apply(this, arguments));
	}

	_createClass(CreateTalksPage, [{
		key: 'onFormSubmit',
		value: function onFormSubmit() {
			var _this2 = this;

			var redirect = function redirect() {
				_this2.props.router.push('/');
			};
			var data = {
				"imageUrl": this.props.textInputs[FormID].imageUrl.value,
				"presentationDate": this.props.textInputs[FormID].presentationDate.value,
				"speakerName": this.props.textInputs[FormID].speakerName.value,
				"subject": this.props.textInputs[FormID].subject.value,
				"summary": this.props.textInputs[FormID].summary.value
			};
			this.props.createTalk(data, redirect);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						_Form2.default,
						{ id: FormID },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'subject',
								formId: FormID,
								label: 'Subject',
								name: 'Subject',
								type: 'text',
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'speakerName',
								formId: FormID,
								label: 'Speaker Name',
								name: 'SpeakerName',
								type: 'text',
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'imageUrl',
								formId: FormID,
								label: 'Image URL',
								name: 'imageUrl',
								type: 'text',
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'summary',
								formId: FormID,
								label: 'Summary',
								name: 'Summary',
								type: 'text',
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'presentationDate',
								formId: FormID,
								label: 'Presentation Date',
								name: 'PresentationDate',
								type: 'date',
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6' },
							_react2.default.createElement(
								'div',
								{ className: 'form-group' },
								_react2.default.createElement('input', { type: 'button', className: 'btn btn-primary ', value: 'Send', onClick: this.onFormSubmit.bind(this) }),
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/', className: 'btn btn-outline' },
									'Back'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return CreateTalksPage;
}(_react2.default.PureComponent);

exports.default = CreateTalksPage;


CreateTalksPage.propTypes = propTypes;

},{"../../../components/form/Form.container":11,"../../../components/form/text-input/TextInput.container":13,"react":"react","react-router":"react-router"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _CreateTalkPage = require('./CreateTalkPage.component');

var _CreateTalkPage2 = _interopRequireDefault(_CreateTalkPage);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(store) {
	return {
		textInputs: store.textInputs
	};
};

var mapDispatch = function mapDispatch(dispatch) {
	return {
		createTalk: function createTalk(data, cb) {
			return dispatch((0, _actions.createTalk)(data, cb));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_CreateTalkPage2.default);

},{"../actions":19,"./CreateTalkPage.component":20,"react-redux":"react-redux"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {};

var DetailsTalksPage = function (_React$PureComponent) {
	_inherits(DetailsTalksPage, _React$PureComponent);

	function DetailsTalksPage() {
		_classCallCheck(this, DetailsTalksPage);

		return _possibleConstructorReturn(this, (DetailsTalksPage.__proto__ || Object.getPrototypeOf(DetailsTalksPage)).apply(this, arguments));
	}

	_createClass(DetailsTalksPage, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.fetchTalk(this.props.params.id);
		}
	}, {
		key: 'onDelete',
		value: function onDelete() {
			var _this2 = this;

			var redirect = function redirect() {
				_this2.props.router.push('/');
			};
			this.props.deleteTalk(this.props.params.id, redirect.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row mb30' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-12' },
						_react2.default.createElement(
							'h1',
							null,
							this.props.talk.subject
						),
						_react2.default.createElement(
							'h3',
							null,
							' Presented by:'
						),
						_react2.default.createElement(
							'h3',
							null,
							this.props.talk.speakerName
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement('img', { src: this.props.talk.imageUrl, className: 'align-left img-responsive' }),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'h4',
									null,
									'Summary:'
								),
								' ',
								this.props.talk.summary,
								' '
							)
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'h4',
								null,
								'Presentation Date:'
							),
							(0, _moment2.default)(this.props.talk.presentationDate).format('L')
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'button',
								{ className: 'btn btn-danger', onClick: this.onDelete.bind(this) },
								'Delete'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/edit/" + this.props.params.id, className: 'btn btn-warning' },
								'Edit'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-12' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/', className: 'btn btn-primary' },
								'Back to Home'
							)
						)
					)
				)
			);
		}
	}]);

	return DetailsTalksPage;
}(_react2.default.PureComponent);

exports.default = DetailsTalksPage;


DetailsTalksPage.propTypes = propTypes;

},{"moment":"moment","react":"react","react-router":"react-router"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _DetailsTalkPage = require('./DetailsTalkPage.component');

var _DetailsTalkPage2 = _interopRequireDefault(_DetailsTalkPage);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(store) {
	return {
		talk: store.talkDetails
	};
};

var mapDispatch = function mapDispatch(dispatch) {
	return {
		fetchTalk: function fetchTalk(id) {
			return dispatch((0, _actions.fetchTalk)(id));
		},
		deleteTalk: function deleteTalk(id, cb) {
			return dispatch((0, _actions.deleteTalk)(id, cb));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_DetailsTalkPage2.default);

},{"./DetailsTalkPage.component":22,"./actions":24,"react-redux":"react-redux"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.editTalk = exports.deleteTalk = exports.fetchTalk = undefined;

var _Api = require('../../../services/Api');

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = new _Api2.default();

var fetchTalk = function fetchTalk(id) {
	return function (dispatch) {
		return api.call('talks/' + id).then(function (response) {
			var action = {
				type: 'TALK_FETCH',
				payload: response.data
			};
			dispatch(action);
		});
	};
};

var editTalk = function editTalk(data, cb) {
	return function (dispatch) {
		return api.call('talks', 'put', data).then(function (response) {
			var action = {
				type: 'TALK_EDIT',
				payload: response.data
			};
			dispatch(action);

			if (cb) {
				cb();
			}
		});
	};
};

var deleteTalk = function deleteTalk(id, cb) {
	return function (dispatch) {
		return api.call('talks/' + id, 'delete').then(function (response) {
			var action = {
				type: 'TALK_DELETE',
				payload: response.data
			};
			dispatch(action);

			if (cb) {
				cb();
			}
		});
	};
};

exports.fetchTalk = fetchTalk;
exports.deleteTalk = deleteTalk;
exports.editTalk = editTalk;

},{"../../../services/Api":30}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var initState = {};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case 'TALK_FETCH':
			return action.payload;
		default:
			return state;
	}
};

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Form = require('../../../components/form/Form.container');

var _Form2 = _interopRequireDefault(_Form);

var _TextInput = require('../../../components/form/text-input/TextInput.container');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {};

var FormID = 'editTalkForm';

var EditTalksPage = function (_React$PureComponent) {
	_inherits(EditTalksPage, _React$PureComponent);

	function EditTalksPage() {
		_classCallCheck(this, EditTalksPage);

		return _possibleConstructorReturn(this, (EditTalksPage.__proto__ || Object.getPrototypeOf(EditTalksPage)).apply(this, arguments));
	}

	_createClass(EditTalksPage, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.fetchTalk(this.props.params.id);
		}
	}, {
		key: 'onFormSubmit',
		value: function onFormSubmit() {
			var _this2 = this;

			var redirect = function redirect() {
				_this2.props.router.goBack();
			};
			var data = {
				"id": this.props.params.id,
				"imageUrl": this.props.textInputs[FormID].imageUrl.value,
				"presentationDate": this.props.textInputs[FormID].presentationDate.value,
				"speakerName": this.props.textInputs[FormID].speakerName.value,
				"subject": this.props.textInputs[FormID].subject.value,
				"summary": this.props.textInputs[FormID].summary.value
			};
			this.props.editTalk(data, redirect);
		}
	}, {
		key: 'render',
		value: function render() {
			console.log(this.props);
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						_Form2.default,
						{ id: FormID },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'subject',
								formId: FormID,
								label: 'Subject',
								name: 'Subject',
								type: 'text',
								value: this.props.talk.subject,
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'speakerName',
								formId: FormID,
								label: 'Speaker Name',
								name: 'SpeakerName',
								type: 'text',
								value: this.props.talk.speakerName,
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'imageUrl',
								formId: FormID,
								label: 'Image URL',
								name: 'imageUrl',
								type: 'text',
								value: this.props.talk.imageUrl,
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'summary',
								formId: FormID,
								label: 'Summary',
								name: 'Summary',
								type: 'text',
								value: this.props.talk.summary,
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-12' },
							_react2.default.createElement(_TextInput2.default, {
								id: 'presentationDate',
								formId: FormID,
								label: 'Presentation Date',
								name: 'PresentationDate',
								type: 'date',
								value: (0, _moment2.default)(this.props.talk.presentationDate).format('YYYY-MM-DD'),
								required: true,
								errorMessage: 'The name is required.'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-6' },
							_react2.default.createElement(
								'div',
								{ className: 'form-group' },
								_react2.default.createElement('input', { type: 'button', className: 'btn btn-primary ', value: 'Send', onClick: this.onFormSubmit.bind(this) }),
								_react2.default.createElement('input', { type: 'button', className: 'btn btn-outline  ', value: 'Back', onClick: this.props.router.goBack })
							)
						)
					)
				)
			);
		}
	}]);

	return EditTalksPage;
}(_react2.default.PureComponent);

exports.default = EditTalksPage;


EditTalksPage.propTypes = propTypes;

},{"../../../components/form/Form.container":11,"../../../components/form/text-input/TextInput.container":13,"moment":"moment","react":"react"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _EditTalkPage = require('./EditTalkPage.component');

var _EditTalkPage2 = _interopRequireDefault(_EditTalkPage);

var _actions = require('../details-talk-page/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(store) {
	return {
		textInputs: store.textInputs,
		talk: store.talkDetails
	};
};

var mapDispatch = function mapDispatch(dispatch) {
	return {
		fetchTalk: function fetchTalk(id) {
			return dispatch((0, _actions.fetchTalk)(id));
		},
		editTalk: function editTalk(id, data) {
			return dispatch((0, _actions.editTalk)(id, data));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(_EditTalkPage2.default);

},{"../details-talk-page/actions":24,"./EditTalkPage.component":26,"react-redux":"react-redux"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initState = [];

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case 'TALKS_FETCH':
			return [].concat(_toConsumableArray(action.payload));
		default:
			return state;
	}
};

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  talk: _react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.number,
    imageUrl: _react2.default.PropTypes.string,
    subject: _react2.default.PropTypes.string,
    speakerName: _react2.default.PropTypes.string,
    presentationDate: _react2.default.PropTypes.string
  })
};

var TalkCard = function TalkCard(props) {
  return _react2.default.createElement(
    'div',
    { className: 'col-md-4 col-sm-6 col-xs-12 mb30' },
    _react2.default.createElement(
      'div',
      { className: 'product' },
      _react2.default.createElement('img', { src: props.talk.imageUrl, className: 'img-responsive img-rounded to-animate' }),
      _react2.default.createElement(
        'h4',
        null,
        props.talk.subject
      ),
      _react2.default.createElement(
        'p',
        null,
        props.talk.speakerName
      ),
      _react2.default.createElement(
        'p',
        null,
        (0, _moment2.default)(props.talk.presentationDate).format('L')
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/details/' + props.talk.id },
          'Details'
        )
      )
    )
  );
};

TalkCard.propTypes = propTypes;

exports.default = TalkCard;

},{"moment":"moment","react":"react","react-router":"react-router"}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _app = require('../app.constants');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
	function Api() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Api);

		var instanceOptions = _extends({}, options, { baseURL: _app2.default.apiUrl });

		this.axios = _axios2.default.create(instanceOptions);
	}

	_createClass(Api, [{
		key: 'call',
		value: function call(url) {
			var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
			var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			return this.axios({
				method: method,
				url: this.formatUrl(url),
				data: data
			});
		}
	}, {
		key: 'formatUrl',
		value: function formatUrl(url) {
			if (url.charAt(0) === '/') {
				url;
			} else {
				return '/' + url;
			}
		}
	}]);

	return Api;
}();

exports.default = Api;

},{"../app.constants":1,"axios":"axios"}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initState = {};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];

	switch (action.type) {
		case 'SET_ROUTE_NAME':
			return _extends({}, state, { currentRoute: action.payload });
		default:
			return state;
	}
};

},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setRouteNameOnEnter = exports.setRouteName = undefined;

var _app = require('../../app.store');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routesNameMap = [{
	name: 'Talks',
	path: '/'
}, {
	name: 'CreateTalks',
	path: '/create'
}, {
	name: 'DetailsTalk',
	path: '/details/:id'
}];

var setRouteNameAction = function setRouteNameAction(routeName) {
	return {
		type: 'SET_ROUTE_NAME',
		payload: routeName
	};
};

var setRouteName = function setRouteName(previousRoute, nextRoute) {
	var route = routesNameMap.find(function (route) {
		return route.path === nextRoute.location.pathname;
	});
	if (previousRoute.location.pathname !== nextRoute.location.pathname) {
		_app2.default.dispatch(setRouteNameAction(route.name));
	}
};

var setRouteNameOnEnter = function setRouteNameOnEnter() {
	var route = routesNameMap.find(function (route) {
		return route.path === window.location.hash.replace('#', '');
	});

	_app2.default.dispatch(setRouteNameAction(route.name));
};

exports.setRouteName = setRouteName;
exports.setRouteNameOnEnter = setRouteNameOnEnter;

},{"../../app.store":5}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRcXGFwcFxcYXBwLmNvbnN0YW50cy5qcyIsImNsaWVudFxcYXBwXFxhcHAuaW5pdC5qc3giLCJjbGllbnRcXGFwcFxcYXBwLnJlZHVjZXJzLmpzIiwiY2xpZW50XFxhcHBcXGFwcC5yb3V0ZXMuanN4IiwiY2xpZW50XFxhcHBcXGFwcC5zdG9yZS5qcyIsImNsaWVudFxcYXBwXFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxBcHBIZWFkZXIuY29tcG9uZW50LmpzeCIsImNsaWVudFxcYXBwXFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxBcHBIZWFkZXIuY29udGFpbmVyLmpzeCIsImNsaWVudFxcYXBwXFxjb21wb25lbnRzXFxhcHAtaGVhZGVyXFxhY3Rpb25zLmpzIiwiY2xpZW50XFxhcHBcXGNvbXBvbmVudHNcXGFwcC1oZWFkZXJcXHJlZHVjZXIuanMiLCJjbGllbnRcXGFwcFxcY29tcG9uZW50c1xcZm9ybVxcRm9ybS5jb21wb25lbnQuanN4IiwiY2xpZW50XFxhcHBcXGNvbXBvbmVudHNcXGZvcm1cXEZvcm0uY29udGFpbmVyLmpzeCIsImNsaWVudFxcYXBwXFxjb21wb25lbnRzXFxmb3JtXFx0ZXh0LWlucHV0XFxUZXh0SW5wdXQuY29tcG9uZW50LmpzeCIsImNsaWVudFxcYXBwXFxjb21wb25lbnRzXFxmb3JtXFx0ZXh0LWlucHV0XFxUZXh0SW5wdXQuY29udGFpbmVyLmpzeCIsImNsaWVudFxcYXBwXFxjb21wb25lbnRzXFxmb3JtXFx0ZXh0LWlucHV0XFxhY3Rpb25zLmpzIiwiY2xpZW50XFxhcHBcXGNvbXBvbmVudHNcXGZvcm1cXHRleHQtaW5wdXRcXHJlZHVjZXIuanMiLCJjbGllbnRcXGFwcFxccGFnZXNcXG1haW5cXE1haW4uY29tcG9uZW50LmpzeCIsImNsaWVudFxcYXBwXFxwYWdlc1xcdGFsa3NcXFRhbGtzUGFnZS5jb21wb25lbnQuanN4IiwiY2xpZW50XFxhcHBcXHBhZ2VzXFx0YWxrc1xcVGFsa3NQYWdlLmNvbnRhaW5lci5qc3giLCJjbGllbnRcXGFwcFxccGFnZXNcXHRhbGtzXFxhY3Rpb25zLmpzIiwiY2xpZW50XFxhcHBcXHBhZ2VzXFx0YWxrc1xcY3JlYXRlLXRhbGstcGFnZVxcQ3JlYXRlVGFsa1BhZ2UuY29tcG9uZW50LmpzeCIsImNsaWVudFxcYXBwXFxwYWdlc1xcdGFsa3NcXGNyZWF0ZS10YWxrLXBhZ2VcXENyZWF0ZVRhbGtQYWdlLmNvbnRhaW5lci5qc3giLCJjbGllbnRcXGFwcFxccGFnZXNcXHRhbGtzXFxkZXRhaWxzLXRhbGstcGFnZVxcRGV0YWlsc1RhbGtQYWdlLmNvbXBvbmVudC5qc3giLCJjbGllbnRcXGFwcFxccGFnZXNcXHRhbGtzXFxkZXRhaWxzLXRhbGstcGFnZVxcRGV0YWlsc1RhbGtQYWdlLmNvbnRhaW5lci5qc3giLCJjbGllbnRcXGFwcFxccGFnZXNcXHRhbGtzXFxkZXRhaWxzLXRhbGstcGFnZVxcYWN0aW9ucy5qcyIsImNsaWVudFxcYXBwXFxwYWdlc1xcdGFsa3NcXGRldGFpbHMtdGFsay1wYWdlXFxyZWR1Y2VyLmpzIiwiY2xpZW50XFxhcHBcXHBhZ2VzXFx0YWxrc1xcZWRpdC10YWxrLXBhZ2VcXEVkaXRUYWxrUGFnZS5jb21wb25lbnQuanN4IiwiY2xpZW50XFxhcHBcXHBhZ2VzXFx0YWxrc1xcZWRpdC10YWxrLXBhZ2VcXEVkaXRUYWxrUGFnZS5jb250YWluZXIuanN4IiwiY2xpZW50XFxhcHBcXHBhZ2VzXFx0YWxrc1xccmVkdWNlci5qcyIsImNsaWVudFxcYXBwXFxwYWdlc1xcdGFsa3NcXHRhbGstY2FyZFxcVGFsa0NhcmQuY29tcG9uZW50LmpzeCIsImNsaWVudFxcYXBwXFxzZXJ2aWNlc1xcQXBpLmpzIiwiY2xpZW50XFxhcHBcXHNlcnZpY2VzXFxzZXQtcm91dGUtbmFtZVxccmVkdWNlci5qcyIsImNsaWVudFxcYXBwXFxzZXJ2aWNlc1xcc2V0LXJvdXRlLW5hbWVcXHNldC1yb3V0ZS1uYW1lLmpz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O0FBRUMsT0FBTTtBQUZQLENBWHFCLENBQXRCOztBQWlCQSxJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsWUFBYTtBQUN2QyxRQUFPO0FBQ04sUUFBTSxnQkFEQTtBQUVOLFdBQVM7QUFGSCxFQUFQO0FBSUEsQ0FMRDs7QUFPQSxJQUFNLGVBQWUsU0FBZixZQUFlLENBQUMsYUFBRCxFQUFnQixTQUFoQixFQUE4QjtBQUNsRCxLQUFNLFFBQVEsY0FBYyxJQUFkLENBQW1CO0FBQUEsU0FBUyxNQUFNLElBQU4sS0FBZSxVQUFVLFFBQVYsQ0FBbUIsUUFBM0M7QUFBQSxFQUFuQixDQUFkO0FBQ0EsS0FBSSxjQUFjLFFBQWQsQ0FBdUIsUUFBdkIsS0FBb0MsVUFBVSxRQUFWLENBQW1CLFFBQTNELEVBQXFFO0FBQ3BFLGdCQUFNLFFBQU4sQ0FBZSxtQkFBbUIsTUFBTSxJQUF6QixDQUFmO0FBQ0E7QUFDRCxDQUxEOztBQU9BLElBQU0sc0JBQXNCLFNBQXRCLG1CQUFzQixHQUFNO0FBQ2pDLEtBQU0sUUFBUSxjQUFjLElBQWQsQ0FBbUI7QUFBQSxTQUFTLE1BQU0sSUFBTixLQUFlLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixPQUFyQixDQUE2QixHQUE3QixFQUFrQyxFQUFsQyxDQUF4QjtBQUFBLEVBQW5CLENBQWQ7O0FBRUEsZUFBTSxRQUFOLENBQWUsbUJBQW1CLE1BQU0sSUFBekIsQ0FBZjtBQUNBLENBSkQ7O1FBTVMsWSxHQUFBLFk7UUFBYyxtQixHQUFBLG1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGNvbnN0YW50cyA9IHtcImVudmlyb25tZW50XCI6XCJkZXZcIixcImFwaVVybFwiOlwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaVwifTsgZXhwb3J0IGRlZmF1bHQgY29uc3RhbnRzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFJvdXRlciwgaGFzaEhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL2FwcC5zdG9yZSc7XHJcblxyXG5pbmplY3RUYXBFdmVudFBsdWdpbigpO1xyXG5cclxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcclxuXHRyZW5kZXIoXHJcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuXHRcdFx0PFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj5cclxuXHRcdDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLXdyYXBwZXInKVxyXG5cdCk7XHJcbn1cclxuXHJcbnN0b3JlLmRpc3BhdGNoKGluaXRBcHApOyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IG1lbnVNb2JpbGUgZnJvbSAnLi9jb21wb25lbnRzL2FwcC1oZWFkZXIvcmVkdWNlcic7XHJcbmltcG9ydCB0ZXh0SW5wdXRzIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3RleHQtaW5wdXQvcmVkdWNlcic7XHJcblxyXG4vL1BhZ2VzXHJcbmltcG9ydCB0YWxrcyBmcm9tICcuL3BhZ2VzL3RhbGtzL3JlZHVjZXInO1xyXG5pbXBvcnQgdGFsa0RldGFpbHMgZnJvbSAnLi9wYWdlcy90YWxrcy9kZXRhaWxzLXRhbGstcGFnZS9yZWR1Y2VyJztcclxuXHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCByb3V0ZU5hbWUgZnJvbSAnLi9zZXJ2aWNlcy9zZXQtcm91dGUtbmFtZS9yZWR1Y2VyJztcclxuXHJcbmNvbnN0IGNvbWJpbmVkcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdG1lbnVNb2JpbGUsXHJcblx0dGV4dElucHV0cyxcclxuXHRyb3V0ZU5hbWUsXHJcblx0dGFsa3MsXHJcblx0dGFsa0RldGFpbHNcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lZHJlZHVjZXJzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgc2V0Um91dGVOYW1lLCBzZXRSb3V0ZU5hbWVPbkVudGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXQtcm91dGUtbmFtZS9zZXQtcm91dGUtbmFtZSc7XHJcblxyXG4vLyBSb3V0ZSBDb21wb25lbnRzXHJcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvbWFpbi9NYWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCBUYWxrc1BhZ2UgZnJvbSAnLi9wYWdlcy90YWxrcy9UYWxrc1BhZ2UuY29udGFpbmVyJztcclxuaW1wb3J0IENyZWF0ZVRhbGtQYWdlIGZyb20gJy4vcGFnZXMvdGFsa3MvY3JlYXRlLXRhbGstcGFnZS9DcmVhdGVUYWxrUGFnZS5jb250YWluZXInO1xyXG5pbXBvcnQgRGV0YWlsc1RhbGtQYWdlIGZyb20gJy4vcGFnZXMvdGFsa3MvZGV0YWlscy10YWxrLXBhZ2UvRGV0YWlsc1RhbGtQYWdlLmNvbnRhaW5lcidcclxuaW1wb3J0IEVkaXRUYWxrUGFnZSBmcm9tICcuL3BhZ2VzL3RhbGtzL2VkaXQtdGFsay1wYWdlL0VkaXRUYWxrUGFnZS5jb250YWluZXInXHJcbmNvbnN0IHJvdXRlcyA9IChcclxuXHQ8ZGl2PlxyXG5cdFx0PFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSBoaXN0b3J5PXticm93c2VySGlzdG9yeX0gPlxyXG5cdFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e1RhbGtzUGFnZX0vPlxyXG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9jcmVhdGVcIiBjb21wb25lbnQ9e0NyZWF0ZVRhbGtQYWdlfS8+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPVwiL2RldGFpbHMvOmlkXCIgY29tcG9uZW50PXtEZXRhaWxzVGFsa1BhZ2V9Lz5cclxuXHRcdFx0PFJvdXRlIHBhdGg9XCIvZWRpdC86aWRcIiBjb21wb25lbnQ9e0VkaXRUYWxrUGFnZX0vPlxyXG5cdFx0PC9Sb3V0ZT5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vYXBwLnJlZHVjZXJzJztcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2FwcC5jb25zdGFudHMnO1xyXG5cclxuY29uc3QgZ2V0TWlkZGxld2FyZXMgPSAoKSA9PiB7XHJcblx0aWYgKGNvbnN0YW50cy5lbnZpcm9ubWVudCA9PT0gJ2RldicpIHtcclxuXHRcdHJldHVybiBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcigpKTtcclxuXHR9IGVsc2UgaWYgKGNvbnN0YW50cy5lbnZpcm9ubWVudCA9PT0gJ3Byb2QnKSB7XHJcblx0XHRyZXR1cm4gYXBwbHlNaWRkbGV3YXJlKHRodW5rKTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1pZGRsZXdhcmVzID0gZ2V0TWlkZGxld2FyZXMoKTtcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgbWlkZGxld2FyZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQmFyLCBJY29uQnV0dG9uLCBGbGF0QnV0dG9uLCBEcmF3ZXIgfSBmcm9tICdtYXRlcmlhbC11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuXHRtb2JpbGVNZW51OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcblx0b3Blbk1lbnVNb2JpbGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0Y2xvc2VNZW51TW9iaWxlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdHRvZ2dsZU1lbnVNb2JpbGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBBcHBIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9XCJtYWluSGVhZGVyXCI+ICBcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWZpeGVkLXRvcFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJcIj48aT48L2k+PC9hPlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5Qb3dlciBIb3VyIFRhbGtzPC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufVxyXG5cclxuQXBwSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcEhlYWRlcjsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJy4vQXBwSGVhZGVyLmNvbXBvbmVudCdcclxuaW1wb3J0ICogYXMgbW9iaWxlTWVudSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgbWFwU3RhdGUgPSBzdG9yZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdG1vYmlsZU1lbnU6IHN0b3JlLm1lbnVNb2JpbGUsXHJcblx0XHRyb3V0ZU5hbWU6IHN0b3JlLnJvdXRlTmFtZVxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRvcGVuTWVudU1vYmlsZTogKCkgPT4gZGlzcGF0Y2gobW9iaWxlTWVudS5vcGVuKCkpLFxyXG5cdFx0Y2xvc2VNZW51TW9iaWxlOiAoKSA9PiBkaXNwYXRjaChtb2JpbGVNZW51LmNsb3NlKCkpLFxyXG5cdFx0dG9nZ2xlTWVudU1vYmlsZTogZmxhZyA9PiBkaXNwYXRjaChtb2JpbGVNZW51LnRvZ2dsZShmbGFnKSlcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShBcHBIZWFkZXIpIiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShmbGFnKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdNT0JJTEVfTUVOVV9UT0dHTEUnLFxyXG5cdFx0cGF5bG9hZDogIWZsYWdcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbigpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ01PQklMRV9NRU5VX09QRU4nXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTU9CSUxFX01FTlVfQ0xPU0UnXHJcblx0fTtcclxufSIsImNvbnN0IGluaXRTdGF0ZSA9IHtcclxuXHRvcGVuOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0Y2FzZSAnTU9CSUxFX01FTlVfVE9HR0xFJzpcclxuXHRcdHJldHVybiB7IC4uLnN0YXRlLCBvcGVuOiAhc3RhdGUub3BlbiB9O1xyXG5cclxuXHRjYXNlICdNT0JJTEVfTUVOVV9PUEVOJzpcclxuXHRcdHJldHVybiB7IC4uLnN0YXRlLCBvcGVuOiB0cnVlIH07XHJcblxyXG5cdGNhc2UgJ01PQklMRV9NRU5VX0NMT1NFJzpcclxuXHRcdHJldHVybiB7IC4uLnN0YXRlLCBvcGVuOiBmYWxzZSB9O1xyXG5cclxuXHRkZWZhdWx0OlxyXG5cdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcblx0aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRjb250ZW50OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuZWxlbWVudCksIFJlYWN0LlByb3BUeXBlcy5lbGVtZW50XSlcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XHJcblx0XHR0aGlzLnByb3BzLmZvcm1Jbml0KHRoaXMucHJvcHMuaWQpO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxmb3JtIGlkPXt0aGlzLnByb3BzLmlkfT5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbiB8fCB0aGlzLnByb3BzLmNvbnRlbnR9XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGZvcm1Jbml0IH0gZnJvbSAnLi90ZXh0LWlucHV0L2FjdGlvbnMnO1xyXG5cclxuY29uc3QgbWFwU3RhdGUgPSBzdG9yZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRleHRJbnB1dHM6IHN0b3JlLnRleHRJbnB1dHNcclxuXHR9OyBcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRmb3JtSW5pdDogKGZvcm1JZCkgPT4gZGlzcGF0Y2goZm9ybUluaXQoZm9ybUlkKSlcclxuXHR9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEZvcm0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG5cdGluaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0ZGVzdHJveTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRpbnB1dENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRpbnB1dElzVmFsaWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG5cdGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0bmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0ZXJyb3JNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0dHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHJlcXVpcmVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG5cdHZhbHVlOiAnJ1xyXG59O1xyXG5cclxuXHJcbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5pbml0KHRoaXMuZm9ybUlkLCB0aGlzLmlkLCB0aGlzLnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5kZXN0cm95KHRoaXMuaWQpO1xyXG5cdH1cclxuXHJcblx0aW5wdXRPbkNoYW5nZShldmVudCkge1xyXG5cdFx0dGhpcy5wcm9wcy5pbnB1dENoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdH1cclxuXHJcblx0aXNWYWxpZCh2YWx1ZSkge1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BzLnJlcXVpcmVkICYmICF2YWx1ZSkge1xyXG5cdFx0XHRpc1ZhbGlkID0gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2VtYWlsJykge1xyXG5cdFx0XHRpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZS5lbWFpbCh2YWx1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGlzVmFsaWQ7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCB2YWx1ZSA9IHRoaXMucHJvcHMuaW5wdXQgPyB0aGlzLnByb3BzLmlucHV0LnZhbHVlIDogJyc7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9e3RoaXMucHJvcHMudHlwZX0gaHRtbEZvcj17dGhpcy5wcm9wcy5uYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGdcIiBvbkNoYW5nZT17dGhpcy5pbnB1dE9uQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlID0ge3ZhbHVlfS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcblRleHRJbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblRleHRJbnB1dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBpbnB1dEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlID0gKHN0b3JlLCBwcm9wcykgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRpbnB1dDogc3RvcmUudGV4dElucHV0c1twcm9wcy5mb3JtSWRdW3Byb3BzLmlkXSxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2ggPSAoZGlzcGF0Y2gsIHByb3BzKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6ICgpID0+IGRpc3BhdGNoKGlucHV0QWN0aW9ucy5pbnB1dEluaXQocHJvcHMuZm9ybUlkLCBwcm9wcy5pZCwgcHJvcHMudmFsdWUpKSxcclxuXHRcdGRlc3Ryb3k6ICgpID0+IGRpc3BhdGNoKGlucHV0QWN0aW9ucy5pbnB1dERlc3Ryb3kocHJvcHMuaWQpKSxcclxuXHRcdGlucHV0Q2hhbmdlOiB0ZXh0ID0+IGRpc3BhdGNoKGlucHV0QWN0aW9ucy5pbnB1dENoYW5nZShwcm9wcy5mb3JtSWQsIHByb3BzLmlkLCB0ZXh0KSksXHJcblx0XHRpbnB1dElzVmFsaWQ6IGlzVmFsaWQgPT4gZGlzcGF0Y2goaW5wdXRBY3Rpb25zLmlucHV0SXNWYWxpZChwcm9wcy5pZCwgaXNWYWxpZCkpXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKFRleHRJbnB1dCk7IiwiY29uc3QgZm9ybUluaXQgPSAoZm9ybUlkKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdGT1JNX0lOSVQnLFxyXG5cdFx0cGF5bG9hZDoge1xyXG5cdFx0XHRmb3JtSWQ6IGZvcm1JZFxyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBpbnB1dEluaXQgPSAoZm9ybUlkLCBpbnB1dElkLCB2YWx1ZSA9ICcnKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdURVhUX0lOUFVUX0lOSVQnLFxyXG5cdFx0cGF5bG9hZDoge1xyXG5cdFx0XHRmb3JtSWQ6IGZvcm1JZCxcclxuXHRcdFx0aW5wdXRJZDogaW5wdXRJZCxcclxuXHRcdFx0dmFsdWU6IHZhbHVlLFxyXG5cdFx0XHRpc1ZhbGlkOiB0cnVlXHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGlucHV0RGVzdHJveSA9IGlkID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1RFWFRfSU5QVVRfREVTVFJPWScsXHJcblx0XHRwYXlsb2FkOiBpZFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBpbnB1dENoYW5nZSA9IChmb3JtSWQsIGlucHV0SWQsIHRleHQpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1RFWFRfSU5QVVRfQ0hBTkdFJyxcclxuXHRcdHBheWxvYWQ6IHtcclxuXHRcdFx0Zm9ybUlkLFxyXG5cdFx0XHRpbnB1dElkLFxyXG5cdFx0XHR0ZXh0XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGlucHV0SXNWYWxpZCA9IChmb3JtSWQsIGlucHV0SWQsIGlkVmFsaWQpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ1RFWFRfSU5QVVRfSVNfVkFMSUQnLFxyXG5cdFx0cGF5bG9hZDoge1xyXG5cdFx0XHRmb3JtSWQsXHJcblx0XHRcdGlucHV0SWQsXHJcblx0XHRcdGlkVmFsaWRcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZm9ybUluaXQsIGlucHV0SW5pdCwgaW5wdXREZXN0cm95LCBpbnB1dENoYW5nZSwgaW5wdXRJc1ZhbGlkIH07IiwiY29uc3QgaW5pdFN0YXRlID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cdGNhc2UgJ0ZPUk1fSU5JVCc6XHJcblx0XHRyZXR1cm4gey4uLnN0YXRlLCBbYWN0aW9uLnBheWxvYWQuZm9ybUlkXToge30gfTtcclxuXHRjYXNlICdURVhUX0lOUFVUX0lOSVQnOlxyXG5cdFx0cmV0dXJuIHsgLi4uc3RhdGUsIFthY3Rpb24ucGF5bG9hZC5mb3JtSWRdOiB7IC4uLnN0YXRlW2FjdGlvbi5wYXlsb2FkLmZvcm1JZF0sIFthY3Rpb24ucGF5bG9hZC5pbnB1dElkXTogYWN0aW9uLnBheWxvYWQgfSB9O1xyXG5cdGNhc2UgJ1RFWFRfSU5QVVRfREVTVFJPWSc6IHtcclxuXHRcdGxldCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuXHRcdGRlbGV0ZSBuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZF07XHJcblx0XHRyZXR1cm4gbmV3U3RhdGU7XHJcblx0fVxyXG5cdGNhc2UgJ1RFWFRfSU5QVVRfQ0hBTkdFJzpcclxuXHRcdHJldHVybiB7IC4uLnN0YXRlLCBbYWN0aW9uLnBheWxvYWQuZm9ybUlkXTogeyAuLi5zdGF0ZVthY3Rpb24ucGF5bG9hZC5mb3JtSWRdLCBbYWN0aW9uLnBheWxvYWQuaW5wdXRJZF06IHsgLi4uc3RhdGVbYWN0aW9uLnBheWxvYWQuZm9ybUlkXVthY3Rpb24ucGF5bG9hZC5pbnB1dElkXSwgdmFsdWU6IGFjdGlvbi5wYXlsb2FkLnRleHQgfSB9IH07XHJcblx0Y2FzZSAnVEVYVF9JTlBVVF9JU19WQUxJRCc6XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgW2FjdGlvbi5wYXlsb2FkLmZvcm1JZF06IHsgLi4uc3RhdGVbYWN0aW9uLnBheWxvYWQuZm9ybUlkXSwgW2FjdGlvbi5wYXlsb2FkLmlucHV0SWRdOiB7IC4uLnN0YXRlW2FjdGlvbi5wYXlsb2FkLmZvcm1JZF1bYWN0aW9uLnBheWxvYWQuaW5wdXRJZF0sIGlzVmFsaWQ6IGFjdGlvbi5wYXlsb2FkLmlzVmFsaWQgfSB9IH07XHJcblx0ZGVmYXVsdDpcclxuXHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXBwLWhlYWRlci9BcHBIZWFkZXIuY29udGFpbmVyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxBcHBIZWFkZXIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZy1sZWFkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBvd2VyIEhvdXIgVGFsa3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgVGFsa0NhcmQgZnJvbSAnLi90YWxrLWNhcmQvVGFsa0NhcmQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuXHR0YWxrczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdFxyXG5cdH0pKS5pc1JlcXVpcmVkLFxyXG5cdGZldGNoVGFsa3M6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWxrc1BhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5mZXRjaFRhbGtzKCk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlciBtYjMwXCI+PExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvY3JlYXRlXCI+Q3JlYXRlIHRhbGs8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhbGtzLm1hcCgodGFsaywgaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFsa0NhcmQga2V5PXtpZH0gdGFsaz17dGFsa30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuVGFsa3NQYWdlLnByb3BUeXBlcyA9IHByb3BUeXBlczsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgVGFsa3NQYWdlIGZyb20gJy4vVGFsa3NQYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGZldGNoVGFsa3MgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgbWFwU3RhdGUgPSBzdG9yZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRhbGtzOiBzdG9yZS50YWxrc1xyXG5cdH07IFxyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2ggPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGZldGNoVGFsa3M6ICgpID0+IGRpc3BhdGNoKGZldGNoVGFsa3MoKSlcclxuXHR9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKFRhbGtzUGFnZSk7IiwiaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BcGknO1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSgpO1xyXG5cclxuXHJcbmNvbnN0IGZldGNoVGFsa3MgPSAoKSA9PiBkaXNwYXRjaCA9PiBhcGkuY2FsbCgndGFsa3MnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRjb25zdCBhY3Rpb24gPSB7XHJcblx0XHR0eXBlOiAnVEFMS1NfRkVUQ0gnLFxyXG5cdFx0cGF5bG9hZDogcmVzcG9uc2UuZGF0YVxyXG5cdH07XHJcblx0ZGlzcGF0Y2goYWN0aW9uKTtcclxufSk7XHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFsayA9IChkYXRhLCBjYikgPT4gZGlzcGF0Y2ggPT4gYXBpLmNhbGwoJ3RhbGtzJywgJ3Bvc3QnLCBkYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRjb25zdCBhY3Rpb24gPSB7XHJcblx0XHR0eXBlOiAnVEFMS1NfQ1JFQVRFJyxcclxuXHRcdHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFcclxuXHR9O1xyXG5cdGRpc3BhdGNoKGFjdGlvbik7XHJcblx0Y29uc29sZS5sb2coY2IpXHJcblx0aWYgKGNiKSB7XHJcblx0XHRjYigpO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGZldGNoVGFsa3MsIGNyZWF0ZVRhbGsgfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9mb3JtL0Zvcm0uY29udGFpbmVyJztcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Zvcm0vdGV4dC1pbnB1dC9UZXh0SW5wdXQuY29udGFpbmVyJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9e1xyXG59O1xyXG5cclxuY29uc3QgRm9ybUlEID0gJ2NyZWF0ZVRhbGtGb3JtJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVUYWxrc1BhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuXHRvbkZvcm1TdWJtaXQoKXtcclxuXHRcdGNvbnN0IHJlZGlyZWN0ID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJylcclxuXHRcdH1cclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdFwiaW1hZ2VVcmxcIjogdGhpcy5wcm9wcy50ZXh0SW5wdXRzW0Zvcm1JRF0uaW1hZ2VVcmwudmFsdWUgLFxyXG5cdFx0XHRcInByZXNlbnRhdGlvbkRhdGVcIjogdGhpcy5wcm9wcy50ZXh0SW5wdXRzW0Zvcm1JRF0ucHJlc2VudGF0aW9uRGF0ZS52YWx1ZSxcclxuXHRcdFx0XCJzcGVha2VyTmFtZVwiOiB0aGlzLnByb3BzLnRleHRJbnB1dHNbRm9ybUlEXS5zcGVha2VyTmFtZS52YWx1ZSxcclxuXHRcdFx0XCJzdWJqZWN0XCI6IHRoaXMucHJvcHMudGV4dElucHV0c1tGb3JtSURdLnN1YmplY3QudmFsdWUsXHJcblx0XHRcdFwic3VtbWFyeVwiOiB0aGlzLnByb3BzLnRleHRJbnB1dHNbRm9ybUlEXS5zdW1tYXJ5LnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5wcm9wcy5jcmVhdGVUYWxrKGRhdGEsIHJlZGlyZWN0KTtcclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8Rm9ybSBpZD17Rm9ybUlEfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInN1YmplY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybUlkPXtGb3JtSUR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlN1YmplY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIlN1YmplY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJUaGUgbmFtZSBpcyByZXF1aXJlZC5cIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwic3BlYWtlck5hbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybUlkPXtGb3JtSUR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNwZWFrZXIgTmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiU3BlYWtlck5hbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJUaGUgbmFtZSBpcyByZXF1aXJlZC5cIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiaW1hZ2VVcmxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybUlkPXtGb3JtSUR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkltYWdlIFVSTFwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiaW1hZ2VVcmxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJUaGUgbmFtZSBpcyByZXF1aXJlZC5cIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwic3VtbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtSWQ9e0Zvcm1JRH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU3VtbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiU3VtbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIlRoZSBuYW1lIGlzIHJlcXVpcmVkLlwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwcmVzZW50YXRpb25EYXRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdGZvcm1JZD17Rm9ybUlEfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcmVzZW50YXRpb24gRGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiUHJlc2VudGF0aW9uRGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIlRoZSBuYW1lIGlzIHJlcXVpcmVkLlwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiIHZhbHVlPVwiU2VuZFwiIG9uQ2xpY2s9e3RoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcyl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZVwiPkJhY2s8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5DcmVhdGVUYWxrc1BhZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQ3JlYXRlVGFsa1BhZ2UgZnJvbSAnLi9DcmVhdGVUYWxrUGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVUYWxrIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZSA9IHN0b3JlID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGV4dElucHV0czogc3RvcmUudGV4dElucHV0c1xyXG5cdH07IFxyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2ggPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGNyZWF0ZVRhbGs6IChkYXRhLCBjYikgPT4gZGlzcGF0Y2goY3JlYXRlVGFsayhkYXRhLCBjYikpXHJcblx0fTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDcmVhdGVUYWxrUGFnZSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9e1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxzVGFsa3NQYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xyXG5cdFx0dGhpcy5wcm9wcy5mZXRjaFRhbGsodGhpcy5wcm9wcy5wYXJhbXMuaWQpO1xyXG5cdH1cclxuXHRvbkRlbGV0ZSgpe1xyXG5cdFx0Y29uc3QgcmVkaXJlY3QgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcm9wcy5kZWxldGVUYWxrKHRoaXMucHJvcHMucGFyYW1zLmlkLCByZWRpcmVjdC5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1iMzBcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0XHRcdDxoMT57dGhpcy5wcm9wcy50YWxrLnN1YmplY3R9PC9oMT5cclxuXHRcdFx0XHRcdFx0PGgzPiBQcmVzZW50ZWQgYnk6PC9oMz5cclxuXHRcdFx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLnRhbGsuc3BlYWtlck5hbWV9PC9oMz5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy50YWxrLmltYWdlVXJsfSBjbGFzc05hbWU9XCJhbGlnbi1sZWZ0IGltZy1yZXNwb25zaXZlXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxwPjxoND5TdW1tYXJ5OjwvaDQ+IHt0aGlzLnByb3BzLnRhbGsuc3VtbWFyeX0gPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxwPjxoND5QcmVzZW50YXRpb24gRGF0ZTo8L2g0Pnttb21lbnQodGhpcy5wcm9wcy50YWxrLnByZXNlbnRhdGlvbkRhdGUpLmZvcm1hdCgnTCcpfTwvcD5cclxuXHRcdFx0XHRcdFx0PHA+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMub25EZWxldGUuYmluZCh0aGlzKX0+RGVsZXRlPC9idXR0b24+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD48TGluayB0bz17XCIvZWRpdC9cIiArIHRoaXMucHJvcHMucGFyYW1zLmlkIH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCI+RWRpdDwvTGluaz48L3A+XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+PExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgPkJhY2sgdG8gSG9tZTwvTGluaz48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5EZXRhaWxzVGFsa3NQYWdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IERldGFpbHNUYWxrUGFnZSBmcm9tICcuL0RldGFpbHNUYWxrUGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBmZXRjaFRhbGssIGRlbGV0ZVRhbGsgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgbWFwU3RhdGUgPSBzdG9yZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRhbGs6IHN0b3JlLnRhbGtEZXRhaWxzXHJcblx0fTsgXHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaCA9IGRpc3BhdGNoID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0ZmV0Y2hUYWxrOiAoaWQpID0+IGRpc3BhdGNoKGZldGNoVGFsayhpZCkpLFxyXG5cdFx0ZGVsZXRlVGFsazogKGlkLCBjYikgPT4gZGlzcGF0Y2goZGVsZXRlVGFsayhpZCwgY2IpKVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoRGV0YWlsc1RhbGtQYWdlKTsiLCJpbXBvcnQgQXBpIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0FwaSc7XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKCk7XHJcblxyXG5cclxuY29uc3QgZmV0Y2hUYWxrID0gKGlkKSA9PiBkaXNwYXRjaCA9PiBhcGkuY2FsbCgndGFsa3MvJyArIGlkICkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0Y29uc3QgYWN0aW9uID0ge1xyXG5cdFx0dHlwZTogJ1RBTEtfRkVUQ0gnLFxyXG5cdFx0cGF5bG9hZDogcmVzcG9uc2UuZGF0YVxyXG5cdH07XHJcblx0ZGlzcGF0Y2goYWN0aW9uKTtcclxufSk7XHJcblxyXG5jb25zdCBlZGl0VGFsayA9IChkYXRhLCBjYikgPT4gZGlzcGF0Y2ggPT4gYXBpLmNhbGwoJ3RhbGtzJywgJ3B1dCcsIGRhdGEgKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRjb25zdCBhY3Rpb24gPSB7XHJcblx0XHR0eXBlOiAnVEFMS19FRElUJyxcclxuXHRcdHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFcclxuXHR9O1xyXG5cdGRpc3BhdGNoKGFjdGlvbik7XHJcblxyXG5cdGlmIChjYikge1xyXG5cdFx0Y2IoKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuY29uc3QgZGVsZXRlVGFsayA9IChpZCwgY2IpID0+IGRpc3BhdGNoID0+IGFwaS5jYWxsKCd0YWxrcy8nICsgaWQsICdkZWxldGUnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRjb25zdCBhY3Rpb24gPSB7XHJcblx0XHR0eXBlOiAnVEFMS19ERUxFVEUnLFxyXG5cdFx0cGF5bG9hZDogcmVzcG9uc2UuZGF0YVxyXG5cdH07XHJcblx0ZGlzcGF0Y2goYWN0aW9uKTtcclxuXHJcblx0aWYgKGNiKSB7XHJcblx0XHRjYigpO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGZldGNoVGFsaywgZGVsZXRlVGFsaywgZWRpdFRhbGsgfTsiLCIgY29uc3QgaW5pdFN0YXRlID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ1RBTEtfRkVUQ0gnOlxyXG5cdFx0XHRyZXR1cm4gIGFjdGlvbi5wYXlsb2FkIDtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtLmNvbnRhaW5lcic7XHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9mb3JtL3RleHQtaW5wdXQvVGV4dElucHV0LmNvbnRhaW5lcic7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPXtcclxufTtcclxuXHJcbmNvbnN0IEZvcm1JRCA9ICdlZGl0VGFsa0Zvcm0nOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRUYWxrc1BhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcblx0XHR0aGlzLnByb3BzLmZldGNoVGFsayh0aGlzLnByb3BzLnBhcmFtcy5pZCk7XHJcblx0fVxyXG5cdG9uRm9ybVN1Ym1pdCgpe1xyXG5cdFx0Y29uc3QgcmVkaXJlY3QgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvcHMucm91dGVyLmdvQmFjaygpXHJcblx0XHR9XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRcImlkXCI6IHRoaXMucHJvcHMucGFyYW1zLmlkLFxyXG5cdFx0XHRcImltYWdlVXJsXCI6IHRoaXMucHJvcHMudGV4dElucHV0c1tGb3JtSURdLmltYWdlVXJsLnZhbHVlICxcclxuXHRcdFx0XCJwcmVzZW50YXRpb25EYXRlXCI6IHRoaXMucHJvcHMudGV4dElucHV0c1tGb3JtSURdLnByZXNlbnRhdGlvbkRhdGUudmFsdWUsXHJcblx0XHRcdFwic3BlYWtlck5hbWVcIjogdGhpcy5wcm9wcy50ZXh0SW5wdXRzW0Zvcm1JRF0uc3BlYWtlck5hbWUudmFsdWUsXHJcblx0XHRcdFwic3ViamVjdFwiOiB0aGlzLnByb3BzLnRleHRJbnB1dHNbRm9ybUlEXS5zdWJqZWN0LnZhbHVlLFxyXG5cdFx0XHRcInN1bW1hcnlcIjogdGhpcy5wcm9wcy50ZXh0SW5wdXRzW0Zvcm1JRF0uc3VtbWFyeS52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMucHJvcHMuZWRpdFRhbGsoZGF0YSwgcmVkaXJlY3QpO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8Rm9ybSBpZD17Rm9ybUlEfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInN1YmplY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybUlkPXtGb3JtSUR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlN1YmplY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIlN1YmplY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7dGhpcy5wcm9wcy50YWxrLnN1YmplY3R9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIlRoZSBuYW1lIGlzIHJlcXVpcmVkLlwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJzcGVha2VyTmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtSWQ9e0Zvcm1JRH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU3BlYWtlciBOYW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJTcGVha2VyTmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHt0aGlzLnByb3BzLnRhbGsuc3BlYWtlck5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIlRoZSBuYW1lIGlzIHJlcXVpcmVkLlwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJpbWFnZVVybFwiXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtSWQ9e0Zvcm1JRH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiSW1hZ2UgVVJMXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJpbWFnZVVybFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHt0aGlzLnByb3BzLnRhbGsuaW1hZ2VVcmx9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIlRoZSBuYW1lIGlzIHJlcXVpcmVkLlwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJzdW1tYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdGZvcm1JZD17Rm9ybUlEfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTdW1tYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJTdW1tYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlID0ge3RoaXMucHJvcHMudGFsay5zdW1tYXJ5fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJUaGUgbmFtZSBpcyByZXF1aXJlZC5cIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJlc2VudGF0aW9uRGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtSWQ9e0Zvcm1JRH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiUHJlc2VudGF0aW9uIERhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIlByZXNlbnRhdGlvbkRhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7bW9tZW50KHRoaXMucHJvcHMudGFsay5wcmVzZW50YXRpb25EYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKX1cclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlPVwiVGhlIG5hbWUgaXMgcmVxdWlyZWQuXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCIgdmFsdWU9XCJTZW5kXCIgb25DbGljaz17dGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUgIFwiIHZhbHVlPVwiQmFja1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMucm91dGVyLmdvQmFja30vPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuRWRpdFRhbGtzUGFnZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBFZGl0VGFsa1BhZ2UgZnJvbSAnLi9FZGl0VGFsa1BhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZmV0Y2hUYWxrLCBlZGl0VGFsayB9IGZyb20gJy4uL2RldGFpbHMtdGFsay1wYWdlL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgbWFwU3RhdGUgPSBzdG9yZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRleHRJbnB1dHM6IHN0b3JlLnRleHRJbnB1dHMsXHJcblx0XHR0YWxrOiBzdG9yZS50YWxrRGV0YWlsc1xyXG5cdH07IFxyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2ggPSBkaXNwYXRjaCA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGZldGNoVGFsazogKGlkKSA9PiBkaXNwYXRjaChmZXRjaFRhbGsoaWQpKSxcclxuXHRcdGVkaXRUYWxrOiAoaWQsIGRhdGEpID0+IGRpc3BhdGNoKGVkaXRUYWxrKGlkLCBkYXRhKSlcclxuXHR9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEVkaXRUYWxrUGFnZSk7IiwiIGNvbnN0IGluaXRTdGF0ZSA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdUQUxLU19GRVRDSCc6XHJcblx0XHRcdHJldHVybiBbIC4uLmFjdGlvbi5wYXlsb2FkIF07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG5cdHRhbGs6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRpbWFnZVVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdHN1YmplY3Q6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc3BlYWtlck5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJlc2VudGF0aW9uRGF0ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG5cdH0pXHJcbn07XHJcblxyXG5jb25zdCBUYWxrQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMiBtYjMwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnRhbGsuaW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlIGltZy1yb3VuZGVkIHRvLWFuaW1hdGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3Byb3BzLnRhbGsuc3ViamVjdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLnRhbGsuc3BlYWtlck5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e21vbWVudChwcm9wcy50YWxrLnByZXNlbnRhdGlvbkRhdGUpLmZvcm1hdCgnTCcpfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxMaW5rIHRvPXsnL2RldGFpbHMvJyArIHByb3BzLnRhbGsuaWR9PkRldGFpbHM8L0xpbms+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5UYWxrQ2FyZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWxrQ2FyZDsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2FwcC5jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuXHRcdGNvbnN0IGluc3RhbmNlT3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgYmFzZVVSTDogY29uc3RhbnRzLmFwaVVybCB9XHJcblxyXG5cdFx0dGhpcy5heGlvcyA9IGF4aW9zLmNyZWF0ZShpbnN0YW5jZU9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0Y2FsbCh1cmwsIG1ldGhvZCA9ICdnZXQnLCBkYXRhID0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXhpb3Moe1xyXG5cdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0dXJsOiB0aGlzLmZvcm1hdFVybCh1cmwpLFxyXG5cdFx0XHRkYXRhOiBkYXRhXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZvcm1hdFVybCh1cmwpIHtcclxuXHRcdGlmICh1cmwuY2hhckF0KDApID09PSAnLycpIHtcclxuXHRcdFx0dXJsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcvJyArIHVybDtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJjb25zdCBpbml0U3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdGNhc2UgJ1NFVF9ST1VURV9OQU1FJzpcclxuXHRcdHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50Um91dGU6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0ZGVmYXVsdDpcclxuXHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vYXBwLnN0b3JlJztcclxuXHJcbmNvbnN0IHJvdXRlc05hbWVNYXAgPSBbXHJcblx0e1xyXG5cdFx0bmFtZTogJ1RhbGtzJyxcclxuXHRcdHBhdGg6ICcvJ1xyXG5cdH0sXHJcblxyXG5cdHtcclxuXHRcdG5hbWU6ICdDcmVhdGVUYWxrcycsXHJcblx0XHRwYXRoOiAnL2NyZWF0ZSdcclxuXHR9LFxyXG5cclxuXHR7XHJcblx0XHRuYW1lOiAnRGV0YWlsc1RhbGsnLFxyXG5cdFx0cGF0aDogJy9kZXRhaWxzLzppZCdcclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBzZXRSb3V0ZU5hbWVBY3Rpb24gPSByb3V0ZU5hbWUgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnU0VUX1JPVVRFX05BTUUnLFxyXG5cdFx0cGF5bG9hZDogcm91dGVOYW1lXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IHNldFJvdXRlTmFtZSA9IChwcmV2aW91c1JvdXRlLCBuZXh0Um91dGUpID0+IHtcclxuXHRjb25zdCByb3V0ZSA9IHJvdXRlc05hbWVNYXAuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXRoID09PSBuZXh0Um91dGUubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cdGlmIChwcmV2aW91c1JvdXRlLmxvY2F0aW9uLnBhdGhuYW1lICE9PSBuZXh0Um91dGUubG9jYXRpb24ucGF0aG5hbWUpIHtcclxuXHRcdHN0b3JlLmRpc3BhdGNoKHNldFJvdXRlTmFtZUFjdGlvbihyb3V0ZS5uYW1lKSk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzZXRSb3V0ZU5hbWVPbkVudGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlID0gcm91dGVzTmFtZU1hcC5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJykpO1xyXG5cclxuXHRzdG9yZS5kaXNwYXRjaChzZXRSb3V0ZU5hbWVBY3Rpb24ocm91dGUubmFtZSkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzZXRSb3V0ZU5hbWUsIHNldFJvdXRlTmFtZU9uRW50ZXIgfTsiXX0=
