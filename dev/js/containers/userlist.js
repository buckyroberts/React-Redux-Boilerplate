import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserList extends Component {

  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>{ user.firstName } { user.lastName }</li>
      );
    });
  }

  render() {
    return (
      <ul>
        { this.createListItems() }
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList);