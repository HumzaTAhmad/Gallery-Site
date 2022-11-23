
//reducer will receive state and action from dispatch and update store accordingly
export default (pictures = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...pictures, action.payload];
        default:
            return pictures;
    }
}