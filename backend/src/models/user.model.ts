import { Model, DataTypes, type Optional, Sequelize } from "sequelize";

export interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer" | "buyer";
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    "id" | "created_at" | "updated_at" | "deleted_at"
  > {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: "admin" | "customer" | "buyer";

  public created_at!: Date;
  public updated_at!: Date;
  public deleted_at!: Date;

  static initModel(sequelize: Sequelize): typeof User {
    return User.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(150),
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM("admin", "customer", "buyer"),
          allowNull: false,
          defaultValue: "customer",
        },
      },
      {
        sequelize,
        tableName: "users",
        timestamps: true,
        underscored: true,
        paranoid: true,
        modelName: "User",
      }
    );
  }

  static associate(models: any) {
    User.hasMany(models.Product, { foreignKey: "user_id", as: "products" });
  }
}
