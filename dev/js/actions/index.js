import axios from 'axios';

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const fetchPosts = () => {
    const request = axios.get('http://jsonplaceholder.typicode.com/posts');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: 'FETCH_POSTS', payload: data });
        });
    };
}