import { Model } from "sequelize";
import { sequelize } from "../database";
import { CommonEnum } from "../enums/common.enum";

class CommonRepository{

   async create(model: any, data: any){
      try{
         const response = await model.create(data)
         return response
      }catch(error){
         return CommonEnum.NOT_CREATED
      }
   }

   async findAll(model: any, display: any){
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

   //criar tabelas -> await User.sync();
   //https://sequelize.org/docs/v6/core-concepts/model-basics/

}

export default new CommonRepository;