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
import Router from './router';
import { push as Menu } from 'react-burger-menu'





const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);


const Wrap = ({children}) => children;


ReactDOM.render(
    <Provider store={store}>
    	<div id="outerContainer">
    		<Header/>

			<Menu pageWrapId={ "pageWrap" } outerContainerId={ "outerContainer" }>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
			</Menu>

    		<div className="container" id="pageWrap">
    			<Router/>
    		</div>
    	</div>
    </Provider>,
    document.getElementById('root')
);
