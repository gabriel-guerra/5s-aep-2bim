import { Sequelize } from "sequelize";

let databaseName = 'bookworld';
const sequelize = new Sequelize(`postgres://postgres:postgres@localhost:5432/${databaseName}`, {dialect: 'postgres'});

export { sequelize }