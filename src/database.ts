import { Sequelize } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize(`postgres://${process.env.ADM_DB}:${process.env.ADM_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE_NAME}`, {dialect: 'postgres'});

export { sequelize }