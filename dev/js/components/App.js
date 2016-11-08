import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Posts from '../containers/posts';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
         <hr />
        <h2>Posts</h2>
        <Posts />
    </div>
);

export default App;
