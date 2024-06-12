import commonRepository from "../repository/common.repository";
import { Certificate } from "../model/certificate.model";
import { CertificateDTO } from "../dto/certificate.dto";

class CertificateService{

    async dropTable(){
        return await commonRepository.dropTable(Certificate)
    }

    async create(data: CertificateDTO){
        return await commonRepository.create(Certificate, data)
    }

    async findAll(){
        return await commonRepository.findAll(Certificate)
    }

    async findConditions(conditions: any){
        return await commonRepository.findConditions(Certificate, conditions)
    }

    async update(data: CertificateDTO, conditions: any){
        return await commonRepository.update(Certificate, data, conditions)
    }

    async delete(conditions: any){
        return await commonRepository.delete(Certificate, conditions)
    }

}

export default new CertificateService;