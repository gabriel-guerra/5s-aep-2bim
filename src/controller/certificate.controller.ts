import dataValidation from "../middleware/data.validation";
import certificateService from "../service/certificate.service";
import { Request, Response } from "express";

class CertificateController{

    async dropTable(req: Request, res: Response){
        return res.send(await certificateService.dropTable())
    }
    
    async create(req: Request, res: Response){
        
        const data = {
            isbn: req.body.isbn,
            dateConclusion: dataValidation.date(req.body.dateConclusion),
            content: req.body.content
        }

        return res.json((await certificateService.create(data)))
    }

    async findAll(req: Request, res: Response){
        return res.json(await certificateService.findAll());
    }
}

export default new CertificateController;