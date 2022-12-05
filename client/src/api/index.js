import axios from 'axios';

const url1 = 'http://localhost:5000/albums';
const url2 = 'http://localhost:5000/pictures';

export const fetchAlbums = () => axios.get(url1);
export const createAlbum = (newAlbum) => axios.post(url1, newAlbum);
export const updateAlbum = (id, updatedAlbum) => axios.patch(`${url1}/${id}`, updatedAlbum)
export const deleteAlbum = (id) => axios.delete(`${url1}/${id}`)

export const fetchPictures = () => axios.get(url2);
export const createPicture = (newPicture) => axios.post(url2, newPicture);
export const updatePicture = (id, updatedPicture) => axios.patch(`${url2}/${id}`, updatedPicture)
export const deletePicture = (id) => axios.delete(`${url2}/${id}`);