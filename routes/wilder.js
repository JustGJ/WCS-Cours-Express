import express from 'express';
import wilderController from '../controllers/wilder';
import { wilderValidation } from '../validations';

const router = express.Router();

// http://localhost:3000/api/wilder/create ....
router.post('/create', wilderValidation.create, wilderController.create);
router.get('/all', wilderController.all);
router.delete('/delete', wilderController.delete);
router.put('/update', wilderController.update);
router.get('/find/:_id', wilderController.find);

export default router;
