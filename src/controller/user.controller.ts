import userService from "../service/user.service";
import { Request, Response } from "express";
import dataValidation from "../middleware/data.validation";
import bcrypt from 'bcrypt';

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

        if (await userService.findConditions({email: data.email}).then((r) => r.length) > 0) res.status(400).send(`E-mail já utilizado para cadastro`);
        return res.json((await userService.create(data)))
    }

    async findAll(req: Request, res: Response){
        return res.json(await userService.findAll());
    }

    async findConditions(req: Request, res: Response){
        
        const u = {
            email: req.body.email
        }

        const user = await userService.findConditions(u);
        const ans = await bcrypt.compare(req.body.password, user[0].password).then((result) => result);
        //return res.json(ans);
        console.log(ans)

        //return ans ? res.redirect('http://localhost:3000/meus-livros') : null;

        if(ans){
            return res.redirect('http://localhost:3000/meus-livros')
        }else{
            return false;
        }

    }


}

export default new UserController;