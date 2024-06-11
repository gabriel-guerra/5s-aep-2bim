import bookService from "../service/book.service";
import { Request, Response } from "express";

class BookController{

    async dropTable(req: Request, res: Response){
        return res.send(await bookService.dropTable())
    }
    
    async create(req: Request, res: Response){
        return res.json((await bookService.create(req.body)))
    }

    async findAll(req: Request, res: Response){
        return res.json(await bookService.findAll());
    }
}

export default new BookController;