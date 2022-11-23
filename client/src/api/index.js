import axios from 'axios';

const url = 'http://localhost:5000/pictures';

export const fetchPictures = () => axios.get(url);