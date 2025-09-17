import { type Optional } from "sequelize";

// =================== User ===================
export interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer" | "buyer";
  createdAt?: Date;
  updatedAt?: Date;
}

// Attributes required when creating a new User
export interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}

// =================== Product ===================
export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductCreationAttributes
  extends Optional<ProductAttributes, "id" | "createdAt" | "updatedAt"> {}

// =================== Order ===================
export type OrderStatus =
  | "PENDING"
  | "PAID"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export interface OrderAttributes {
  id: string;
  userId: string;
  status: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderCreationAttributes
  extends Optional<
    OrderAttributes,
    "id" | "status" | "createdAt" | "updatedAt"
  > {}

// =================== OrderItem ===================
export interface OrderItemAttributes {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderItemCreationAttributes
  extends Optional<OrderItemAttributes, "id" | "createdAt" | "updatedAt"> {}
