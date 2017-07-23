import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from 'react-router-dom';

const history = createHistory();

const App = () => (<AppBar position="static"> <Toolbar> <Typography type="title" color="inherit">  React App  </Typography>  </Toolbar></AppBar> );

export const PublicRoutes = ({store}) => (
	<Switch>
		<Route path="/home" component={App} />
		<Redirect to={{ pathname: '/home' }} />
	</Switch>
	);

export const PrivateRoutes = props => (
	<Switch>
		<Route path="/home" component={App} />
	</Switch>
	);

export const AuthPrivateRoutes = withRouter(({ history, store, ...rest }) => {
	const signedInUser = false;
	const appRoutes = [<PublicRoutes {...rest} />];
	if (signedInUser) {
		appRoutes.push(<PrivateRoutes {...rest} />);
	}
	return <App>{appRoutes}</App>;
});

export const AppRoutes = store => (
	<Router history={history}>
		<AuthPrivateRoutes store={store} />
	</Router>
);

export default AppRoutes;

