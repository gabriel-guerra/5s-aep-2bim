import userService from "../service/user.service";
import { Request, Response } from "express";
import dataValidation from "../middleware/data.validation";

class UserController{

    async dropTable(req: Request, res: Response){
        return res.send(await userService.dropTable())
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

    async findConditions(req: Request, res: Response){
        const user = await userService.findAll();
        if(user){
            res.send(true);
        }else{
            res.send(false);
        }
    }


}

export default new UserController;