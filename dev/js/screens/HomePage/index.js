import React, { Component } from 'react';
import UserList from '../../containers/user-list';
import UserDetails from '../../containers/user-detail';


export default class HomePage extends Component {
	render() {
		return (
		    <div>
		        <h2>User List</h2>
		        <UserList />
		        <hr />
		        <h2>User Details</h2>
		        <UserDetails />
		    </div>		
    	);
	}
}
