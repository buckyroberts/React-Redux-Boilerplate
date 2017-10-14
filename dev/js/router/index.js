import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import NotFound from '../screens/Error/404';
import BookingList from '../screens/Bookings';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default class App extends Component {
	render() {
		return (
				<ConnectedRouter history={history}>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/bookings" component={BookingList} />
						<Route path="" component={NotFound} />
					</Switch>
				</ConnectedRouter>

		);
	}
}
