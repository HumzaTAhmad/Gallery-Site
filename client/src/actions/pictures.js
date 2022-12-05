import * as api from '../api';

//Action Creators: functions that return actions
export const getPictures = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPictures();
        dispatch({ type: 'FETCH_ALL_PIC', payload: data })
    } catch (error){
        console.log(error.message)
    }
}

export const createPicture = (picture) => async (dispatch) => {
    try{
        const { data } = await api.createPicture(picture);
        dispatch({type: 'CREATE_PIC', payload: data})
    }catch(error){
        console.log(error);
    }
}

export const updatePicture = (id, picture) => async (dispatch) => {
    try {
        const { data } = await api.updatePicture(id, picture)
        dispatch({type: 'UPDATE_PIC', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePicture = (id) => async (dispatch) => {
    try {
        await api.deletePicture(id);

        dispatch({type: 'DELETE_PIC', payload: id})
    } catch (error) {
        console.log(error);
    }
}