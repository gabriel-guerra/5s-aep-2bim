import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class User extends Model {
    declare id: number;
    declare firstName: string;
    declare lastName: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },  
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true
    }
)

export { User }