import userService from "../service/user.service";
import { Request, Response } from "express";
import dataValidation from "../middleware/data.validation";
import commonRepository from "../repository/common.repository";

class UserController{

    async dropTable(req: Request, res: Response){
        return res.send(await userService.dropTable())
    }

    async syncTable(req: Request, res: Response){
        return res.send(await userService.syncTable())
    }
    
    async create(req: Request, res: Response){

        const data = {
            fullName: req.body.fullName,
            birthdate: dataValidation.date(req.body.birthdate),
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        }

        return res.json((await userService.create(data)))
    }

    async findAll(req: Request, res: Response){
        return res.json(await userService.findAll());
    }
}

export default new UserController;