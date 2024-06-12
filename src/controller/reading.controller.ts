import readingService from "../service/reading.service";
import { Request, Response } from "express";

class ReadingController{

    async dropTable(req: Request, res: Response){
        return res.send(await readingService.dropTable())
    }
    
    async create(req: Request, res: Response){
        return res.json((await readingService.create(req.body)))
    }

    async findAll(req: Request, res: Response){
        return res.json(await readingService.findAll());
    }
}

export default new ReadingController;