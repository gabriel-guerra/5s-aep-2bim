import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Reading extends Model {
    declare id: number;
    declare userId: number;
    declare isbn: string;
    declare pagesRead: number;
}

Reading.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pagesRead: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Reading',
        timestamps: true
    }
)

export { Reading }