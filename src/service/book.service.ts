import commonRepository from "../repository/common.repository";
import { Book } from "../model/book.model";
import { BookDTO } from "../dto/book.dto";

class BookService{

    async dropTable(){
        return await commonRepository.dropTable(Book)
    }

    async create(data: BookDTO){
        return await commonRepository.create(Book, data)
    }

    async findAll(){
        return await commonRepository.findAll(Book)
    }

    async findConditions(conditions: any){
        return await commonRepository.findConditions(Book, conditions)
    }

    async update(data: BookDTO, conditions: any){
        return await commonRepository.update(Book, data, conditions)
    }

    async delete(conditions: any){
        return await commonRepository.delete(Book, conditions)
    }

}

export default new BookService;