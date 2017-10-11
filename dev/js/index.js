import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// @todo Move out to external router components
import { Switch, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const history = createHistory();


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
	    	<Switch>
		        <Route path="/" component={HomePage} />
		        <Route path="hello" component={HomePage} />

	      	</Switch>        
        </ConnectedRouter>        
    </Provider>,
    document.getElementById('root')
);
