import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginValidate from '../middlewares/loginValidate';

const router = Router();

router.post('/', loginValidate.validateLogin, loginController.login);

export default router;