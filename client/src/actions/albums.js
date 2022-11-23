import * as api from '../api';

//Action Creators: functions that return actions
export const getAlbums = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAlbums();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error){
        console.log(error.message)
    }
}

export const createAlbum = (album) => async (dispatch) => {
    try{
        const { data } = await api.createAlbum(album);
        dispatch({type: 'CREATE', payload: data})
    }catch(error){
        console.log(error);
    }
}