import { Router } from "express";
import userController from "../controllers/user.js";

const router = Router()


router.get('/',userController.getAllUser);
router.post('/',userController.createUser);
router.get('/:id',userController.getUserById);
router.put('/:id',userController.editUserById);
router.delete('/:id',userController.deleteUserById);
export default router