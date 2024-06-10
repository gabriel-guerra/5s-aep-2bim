import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

class Book extends Model {
    declare isbn: string;
    declare title: string;
    declare author: string;
    declare genre: string;
    declare pages: number;
    declare isAvailable: boolean;
}

Book.init(
    {
        isbn: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Book',
        timestamps: true
    }
)

export { Book }