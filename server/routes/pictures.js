import express from 'express'

import { getPictures } from '../controllers/pictures.js'

const router = express.Router();

router.get('/', getPictures);

export default router;