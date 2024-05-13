import { Router } from "express";
import hello from "./hello";
import userController from "./controller/user.controller";

const router = Router();

export { router }

router.get('/hello', hello.hw)

//database
router.get('/table/user/sync', userController.syncTable)
router.get('/table/user/drop', userController.dropTable)


router.post('/user/create', userController.create);
router.get('/user', userController.findAll);