import axios from 'axios';

const url1 = 'http://localhost:5000/albums';
const url2 = 'http://localhost:5000/pictures';

export const fetchAlbums = () => axios.get(url1);
export const createAlbum = (newAlbum) => axios.post(url1, newAlbum);

export const fetchPictures = () => axios.get(url2);
export const createPicture = (newPicture) => axios.post(url2, newPicture);