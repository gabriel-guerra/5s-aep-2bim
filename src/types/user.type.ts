import { DateOnlyDataType } from "sequelize";

export interface userType{
    id: number,
    fullName: string,
    birthdate: DateOnlyDataType
    email: string,
    password: string    
}