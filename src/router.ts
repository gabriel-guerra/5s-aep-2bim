import { Router } from "express";
import hello from "./hello";

const router = Router();

export { router }

router.get('/hello', hello.hw)