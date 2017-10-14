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

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '10px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


ReactDOM.render(
    <Provider store={store}>
    	<div id="outerContainer">
    		<Header/>

			<Menu styles={ styles } pageWrapId={ "pageWrap" } outerContainerId={ "outerContainer" }  width={ '20%' }>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/#hello">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
			</Menu>

    		<div className="container" id="pageWrap">
    			<Router/>
    		</div>
    	</div>
    </Provider>,
    document.getElementById('root')
);
