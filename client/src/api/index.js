import axios from 'axios';

const url1 = 'http://localhost:5000/albums';
const url2 = 'http://localhost:5000/pictures';

export const fetchAlbums = () => axios.get(url1);
export const createAlbum = (newAlbum) => axios.post(url1, newAlbum);
export const deleteAlbum = (id) => axios.delete(`${url1}/${id}`)

export const fetchPictures = () => axios.get(url2);
export const createPicture = (newPicture) => axios.post(url2, newPicture);
export const deletePicture = (id) => axios.delete(`${url2}/${id}`);