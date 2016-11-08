export default function (state = null, action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
    }
    
    return state;
}
