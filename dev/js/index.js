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
import Header from './containers/header';

// @todo Move out to external router components
import Router from './router';


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);


const Wrap = ({children}) => children;


ReactDOM.render(
    <Provider store={store}>
    	<div>
    		<Header/>

    		<div className="container">
    			<Router/>
    		</div>
    	</div>
    </Provider>,
    document.getElementById('root')
);
