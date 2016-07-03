import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

// Returns the Todos which should be visible to the user
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
};

// Called anytime TodoList updates
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

// Hooks up React function to Redux action
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

// connect() - connects Redux store to a React component (Link)
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList
