import express from 'express'

import { getPictures, createPicture, updatePicture, deletePicture } from '../controllers/pictures.js'

const router = express.Router();

router.get('/', getPictures);
router.post('/', createPicture);
router.patch('/:id', updatePicture);
router.delete('/:id', deletePicture);

export default router;