import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// We need to combine all our reducers into one object before we build our app
const allReducers = combineReducers({
    todos,
    visibilityFilter
});

export default allReducers
