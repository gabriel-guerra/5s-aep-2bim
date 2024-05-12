import { Request, Response } from "express"
import { User } from "./model/user.model";
import commonRepository from "./repository/common.repository";

class Hello{
    
    async hw(req: Request, res: Response){
        res.send('Hello World!')
    }

}

export default new Hello();