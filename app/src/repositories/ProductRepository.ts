import { ProductRepositoryInterface } from "@/interfaces/ProductInterfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepositories: ProductRepositoryInterface = {
  async fetch() {
    const products = await prisma.product.findMany();
    return products ? products : null;
  }, 

  async create({uid, name,type, brand, description, price, quantity, image}) {
    const product = await prisma.product.create({
      data: {
        uid,
        name,
        type,
        brand,
        description,
        price,
        quantity,
        image
      }
    });
    return product;
  },

  async search({keyword, slug}) {
    if(slug === "name") {
      const product = await prisma.product.findMany({
        where: {
          name: keyword
        }
      })
      return product ? product : null;
    } else if(slug === "type") {
      const product = await prisma.product.findMany({
        where: {
          type: keyword
        }
      })
      console.log(product)
      return product ? product : null;
    }
    return null;
  }
}
