import { Request, Response } from "express"
import path from 'path';

class Hello{
    
    async hw(req: Request, res: Response){
        res.send('Hello World!')
    }

    async index(req: Request, res: Response) {
        const indexPath = path.join(__dirname, '../public/index.html');
        res.sendFile(indexPath);
    }

    async myBooks(req: Request, res: Response) {
        const indexPath = path.join(__dirname, '../public/meus-livros/index.html');
        res.sendFile(indexPath);
    }

}

export default new Hello();