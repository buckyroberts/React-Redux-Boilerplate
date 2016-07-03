import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

/*
 * All, Active, and Completed links (in the Footer)
 * FilterLink takes the Link component and connect it to Redux store
 * */

// Subscribes component to Redux store, therefore mapStateToProps() will be called anytime component updates
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

// Allows objects events to dispatch Redux actions
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {dispatch(setVisibilityFilter(ownProps.filter))}
    }
};

// connect() - connects a Redux store to a React component (Link)
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink
