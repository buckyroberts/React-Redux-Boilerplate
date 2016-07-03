let nextTodoId = 0;

/*
 * Actions are changes made to the applications state (usually made up of two parts)
 *      > type - way to describe the change (ie. CHANGE_USERNAME)
 *      > payload - (optional) data needed to perform the action (such as the new username “Bucky”)
 *          > this is optional because sometimes a payload is not needed, only the action type
 * */

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};
