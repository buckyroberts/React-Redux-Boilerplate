/*
 * Reducers specify how actions will alter store (data)
 *      - take in the current state of app, action being performed, and return new state (new object)
 *      - must always return something (even empty state object if needed)
 * */

// Add an individual item to the list, and toggle (strikethrough) when it is complete
const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            // Using map() to loop through each item, we return existing state on objects where nothing changed
            if (state.id == action.id) {
                return Object.assign({}, state, {completed: !state.completed})
            }else{
                return state;
            }
        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state
    }
};

export default todos
