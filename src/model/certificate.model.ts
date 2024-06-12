import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Certificate extends Model {
    declare id: number;
    declare isbn: string;
    declare dateConclusion: DataTypes.DateOnlyDataType;
    declare content: string;
}

Certificate.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateConclusion: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Certificate',
        timestamps: true
    }
)

export { Certificate }