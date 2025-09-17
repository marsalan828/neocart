import sequelize from "../config/db.config.js";
import { Product } from "./product.model.js";
import { User } from "./user.model.js";

const models = {
    User: User.initModel(sequelize),
    Product: Product.initModel(sequelize)
}

Object.values(models).forEach((model: any) => {
    if (typeof model.associate == "function") {
        model.associate(models)
    }
})

export { sequelize };
export default models;