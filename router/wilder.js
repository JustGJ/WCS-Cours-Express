import express from 'express';
import methods from '../controllers/wilder.js';

const router = express.Router();

// http://localhost:3000/api/wilder/create
router.post('/api/wilder/create', methods.create);

export default router;
