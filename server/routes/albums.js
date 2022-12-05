import express from 'express'

import { getAlbums, createAlbum, updateAlbum, deleteAlbum } from '../controllers/albums.js'

const router = express.Router();

router.get('/', getAlbums);
router.post('/', createAlbum);
router.patch('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

export default router;