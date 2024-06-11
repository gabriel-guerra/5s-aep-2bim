import { Router } from "express";
import hello from "./hello";
import userController from "./controller/user.controller";
import bookController from "./controller/book.controller";

const router = Router();

export { router }

router.get('/hello', hello.hw)

//database
router.get('/table/user/drop', userController.dropTable)


router.post('/user/create', userController.create);
router.get('/user', userController.findAll);

router.post('/book/create', bookController.create);
router.get('/book', bookController.findAll);