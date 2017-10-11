import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default class Router extends Component {
	render() {
		return (
	        <ConnectedRouter history={history}>
		    	<Switch>
			        <Route path="/" component={HomePage} />
			        <Route path="/hello" component={HomePage} />
		      	</Switch>        
	        </ConnectedRouter>  
		);
	}
}
