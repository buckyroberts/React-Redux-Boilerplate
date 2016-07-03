import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers'
import App from './components/App'

/*
 * Store - all your data (just one big JavaScript object)
 * It’s like the database for your entire application
 * */

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

/*
 * We pass the entire store (all data) to the Provider
 * Provider makes store available to every component
 * */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
