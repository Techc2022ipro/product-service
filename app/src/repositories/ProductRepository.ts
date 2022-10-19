import { ProductRepositoryInterface } from "@/interfaces/ProductInterfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepositories: ProductRepositoryInterface = {
  async fetch() {
    const products = await prisma.product.findMany();
    return products ? products : null;
  }, 
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
  }
}
