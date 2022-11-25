//state is the state of the current albums array
export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_ALB':
            return action.payload;
        case 'CREATE_ALB':
            return [...state, action.payload];
        default:
            return state;
    }
}
