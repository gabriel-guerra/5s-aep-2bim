import commonRepository from "../repository/common.repository";
import { User } from "../model/user.model";
import { UserDTO } from "../dto/user.dto";

class UserService{

    async dropTable(){
        return await commonRepository.dropTable(User)
    }

    async create(data: UserDTO){
        return await commonRepository.create(User, data)
    }

    async findAll(){
        return await commonRepository.findAll(User)
    }

    async findConditions(conditions: any){
        return await commonRepository.findConditions(User, conditions)
    }

    async update(data: UserDTO, conditions: any){
        return await commonRepository.update(User, data, conditions)
    }

    async delete(conditions: any){
        return await commonRepository.delete(User, conditions)
    }

}

export default new UserService;