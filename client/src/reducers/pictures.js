//state is the state of the current albums array
export default (state = [], action) => {
    switch (action.type){
        case 'DELETE':
            return state.filter((picture) => picture._id !== action.payload)
        case 'FETCH_ALL_PIC':
            return action.payload;
        case 'CREATE_PIC':
            return [...state, action.payload];
        default:
            return state;
    }
}
