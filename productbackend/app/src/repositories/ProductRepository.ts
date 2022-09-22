import { ProductRepositoryInterface } from "@/interfaces/ProductInterfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepositories: ProductRepositoryInterface = {
  async create({uid, name,type, brand, description, price, quantity}) {
    const product = await prisma.product.create({
      data: {
        uid,
        name,
        type,
        brand,
        description,
        price,
        quantity
      }
    });
    return product;
  },

  async userProducts(uid) {
    const products = await prisma.product.findMany({
      where: {
        uid
      }
    });
    return products ? products : null;
  }
}
