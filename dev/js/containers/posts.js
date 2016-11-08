import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Posts extends Component {
    renderList() {
        if(this.props.posts){
 return this.props.posts.map((post) => {
            return (
                <li key={post.id} >
                    {post.title}
                </li>);
        });
        }
       
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(Posts);
