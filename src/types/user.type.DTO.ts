import { DateOnlyDataType } from "sequelize";

export interface userDTO{
    fullName: string,
    birthdate: string,
    email: string,
    password: string,
    isAdmin: boolean    
}