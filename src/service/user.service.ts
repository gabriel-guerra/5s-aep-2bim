import commonRepository from "../repository/common.repository";
import { User } from "../model/user.model";
import { userDTO } from "../types/user.type.DTO";

class UserService{

    async dropTable(){
        return await commonRepository.dropTable(User)
    }

    async create(data: userDTO){
        return await commonRepository.create(User, data)
    }

    async findAll(){
        return await commonRepository.findAll(User)
    }

    async findConditions(conditions: any){
        return await commonRepository.findConditions(User, conditions)
    }

    async update(data: userDTO, conditions: any){
        return await commonRepository.update(User, data, conditions)
    }

    async delete(conditions: any){
        return await commonRepository.delete(User, conditions)
    }

}

export default new UserService;