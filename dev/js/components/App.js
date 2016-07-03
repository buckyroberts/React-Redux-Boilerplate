import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
require('../../scss/style.scss');

/*
 * Containers are just components that are set up to work with Redux
 * */

const App = () => (
    <div>
        <h1>Main App</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App
