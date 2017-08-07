import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch } from 'react-router';

import Game from './Game.js';

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';

const history = createHistory();

export const AppRoutes = store => (
	<Router history={history}>
		<Switch>
			<Route path="/Game" component={Game}/>
		</Switch>
	</Router>
);


export default AppRoutes;
