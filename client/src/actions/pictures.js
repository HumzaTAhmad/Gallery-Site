import * as api from '../api/index.js';

// Action Creators
export const getPictures = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPictures();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
};

export const createPicture = (picture) => async(dispatch) => {
    try {
        const {data} = await api.createPicture(picture); //fetching pictures
    
        dispatch({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error);
    }
}