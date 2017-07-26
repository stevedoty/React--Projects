import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch } from 'react-router';
import Calculator from './calculatorApp.js';
import CalculatorV2 from './calculatorApp-v2.js';

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';

const history = createHistory();

export const AppRoutes = store => (
	<Router history={history}>
		<CalculatorV2/>
	</Router>
);


export default AppRoutes;
