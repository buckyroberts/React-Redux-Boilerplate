import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>{user.first} {user.last}</li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Takes in applications state and passes it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container (state aware)
export default connect(mapStateToProps)(UserList);
