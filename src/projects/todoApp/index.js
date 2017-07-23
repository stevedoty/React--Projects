import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './rootReducer';
import routes, {AppRoutes} from './indexRoute';
import createBrowserHistory from 'history/createBrowserHistory';
import '../../../stylesheets/main.scss';//TODO: stylesheets alias

const history = createBrowserHistory();

injectTapEventPlugin();

const middleware = [ReduxThunk, ReduxPromise];
const createStoreWithMiddleware = compose(applyMiddleware(
		...middleware
	), typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
		? window.devToolsExtension()
	: f => f)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
	<MuiThemeProvider theme="">
		<Provider store={store}>
			{AppRoutes(store)}
		</Provider>
	</MuiThemeProvider>
	, document.querySelector('#react-app'));