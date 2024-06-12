import commonRepository from "../repository/common.repository";
import { Reading } from "../model/reading.model";
import { ReadingDTO } from "../dto/reading.dto";

class ReadingService{

    async dropTable(){
        return await commonRepository.dropTable(Reading)
    }

    async create(data: ReadingDTO){
        return await commonRepository.create(Reading, data)
    }

    async findAll(){
        return await commonRepository.findAll(Reading)
    }

    async findConditions(conditions: any){
        return await commonRepository.findConditions(Reading, conditions)
    }

    async update(data: ReadingDTO, conditions: any){
        return await commonRepository.update(Reading, data, conditions)
    }

    async delete(conditions: any){
        return await commonRepository.delete(Reading, conditions)
    }

}

export default new ReadingService;