import { Model, DataTypes, type Optional, Sequelize } from "sequelize";

export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url?: string | null;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;
}

export interface ProductCreationAttributes
  extends Optional<
    ProductAttributes,
    "id" | "created_at" | "updated_at" | "deleted_at"
  > {}

export class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: string;
  public name!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
  public image_url!: string | null;
  public user_id!: string;

  public created_at!: Date;
  public updated_at!: Date;
  public deleted_at!: Date | null;

  static initModel(sequelize: Sequelize): typeof Product {
    return Product.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "products",
        modelName: "Product",
        timestamps: true,
        paranoid: true,
        underscored: true,
      }
    );
  }
  static associate(models: any) {
    Product.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}
