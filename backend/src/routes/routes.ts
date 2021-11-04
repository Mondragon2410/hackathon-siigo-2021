import { Router } from 'express';

import { addJ, getJ, getJById, removeJ } from '../controllers/controller';

const router: Router = Router();

//Vice
router.post(`/addJ`, addJ);
router.get(`/getJ`, getJ);
router.get(`/getJ/:id`, getJById);
router.post(`/removeJ`, removeJ);

export default router