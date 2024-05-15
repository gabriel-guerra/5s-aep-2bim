import { CommonEnum } from "../enums/common.enum";

class CommonRepository{

   async dropTable(model: any){
      if (process.env.NODE_ENV == 'DEV'){
         await model.drop();
      }
   }
   
   async create(model: any, data: any){
      try{
         const response = await model.create(data)
         return response
      }catch(error){
         console.error(`Error ${error}`)
         return CommonEnum.NOT_CREATED
      }
   }

   async findAll(model: any){
      return await model.findAll()
   }

   async findConditions(model: any, entries: any){
      return await model.findAll({where: entries})
   }

   async update(model: any, data: any, conditions: any){
      try{
         const response = await model.update(data, {where: conditions})
         return response
      }catch(error){
         return CommonEnum.NOT_UPDATED
      }
   }

   async delete(model: any, conditions: any){
      try{
         const response = await model.destroy({where: conditions})
         return response
      }catch(error){
         return CommonEnum.NOT_DELETED
      }
   }

}

export default new CommonRepository;