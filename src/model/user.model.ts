import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import bcrypt from 'bcrypt'

class User extends Model {
    declare id: number;
    declare fullName: string;
    declare birthdate: DataTypes.DateOnlyDataType;
    declare email: string;
    declare password: string;
    declare isAdmin: boolean;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            set(value: string){
                this.setDataValue('password', bcrypt.hash(value, 10, (err, result: string) => {
                    if (err){
                        throw new Error(`${err}`)
                    }

                    return result;
                }))
            }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true
    }
)

export { User }