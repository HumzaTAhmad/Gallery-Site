import axios from 'axios';

const url = 'http://localhost:5000/pictures'

export const fetchPictures = () => axios.get(url)
export const createPicture = (newPicture) => axios.post(url, newPicture)
//export const updatePicture = (id, updatedPicture) => axios.patch(`${url}/${id}`, updatedPicture)
//export const deletePicture = (id) => axios.delete(`${url}/${id}`)