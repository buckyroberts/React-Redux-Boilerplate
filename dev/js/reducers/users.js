/*
 * Reducers take in the current state of app, action being performed, and return new state (new object)
 *      - must always return something (even empty state object if needed)
 * */

// Individual user
const user = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                id: action.id,
                first: action.first,
                last: action.last,
                age: action.age,
                description: action.description
            };
        default:
            return state
    }
};

// All users
const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                user(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                user(t, action)
            );
        default:
            return state
    }
};

export default users
