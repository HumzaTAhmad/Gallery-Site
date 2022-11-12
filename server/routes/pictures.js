import express from 'express'

import { getPictures, createPicture } from '../controllers/pictures.js'

const router = express.Router();

router.get('/', getPictures);
router.post('/', createPicture)

export default router;