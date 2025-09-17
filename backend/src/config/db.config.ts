import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

export const DB_NAME = process.env.DB_NAME || "";
export const DB_USER = process.env.DB_USER || "";
export const DB_PASS = process.env.DB_PASS || "";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = Number(process.env.DB_PORT) || 5432;

const sequelize = new Sequelize(
    DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    logging: true,
}
);

export default sequelize;