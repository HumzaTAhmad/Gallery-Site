//state is the state of the current albums array
export default (state = [], action) => {
    switch (action.type){
        case 'UPDATE_ALB':
            return state.map((album) => album._id === action.payload._id ? action.payload : album)
        case 'DELETE_ALB':
            return state.filter((album) => album._id !== action.payload)
        case 'FETCH_ALL_ALB':
            return action.payload;
        case 'CREATE_ALB':
            return [...state, action.payload];
        default:
            return state;
    }
}
