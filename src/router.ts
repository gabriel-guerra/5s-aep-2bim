import { Router } from "express";
import hello from "./hello";
import userController from "./controller/user.controller";
import bookController from "./controller/book.controller";
import readingController from "./controller/reading.controller";
import certificateController from "./controller/certificate.controller";

const router = Router();

export { router }

router.get('/hello', hello.hw)

router.get('/', hello.index)

//database
router.get('/table/user/drop', userController.dropTable)


router.post('/user/create', userController.create);
router.get('/user', userController.findAll);

router.post('/book/create', bookController.create);
router.get('/book', bookController.findAll);

router.post('/read/create', readingController.create);
router.get('/read', readingController.findAll);

router.post('/certificate/create', certificateController.create);
router.get('/certificate', certificateController.findAll);