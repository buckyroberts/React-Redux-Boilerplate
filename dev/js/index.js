import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from './reducer';

const store = createStore(allReducers);

ReactDOM.render(<h1>Hey now</h1>, document.getElementById('root')
);
