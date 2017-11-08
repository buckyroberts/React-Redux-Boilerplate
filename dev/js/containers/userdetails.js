import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render () {
    if (!this.props.user) {
      return (
        <div>
          <h4>Select user to view user details...</h4>
        </div>
      )
    }
    return (
      <div>
        <img src={this.props.user.thumbnail} />
        <h2>{this.props.user.firstName} {this.props.user.lastName}</h2>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.bio}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetails);