import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'neocart', 'neocart_user', '12345678', {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: true,
}
);

export default sequelize;