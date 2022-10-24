import { ProductRepositoryInterface } from "@/interfaces/ProductInterfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepositories: ProductRepositoryInterface = {
  async fetch() {
    const products = await prisma.product.findMany(
      {
        take: 5,
        orderBy: {
          createdAt: "desc",
        }
      }
    );
    return products ? products : null;
  }, 

  async fetchById(pid) {
    const product = await prisma.product.findFirst({
      where: {
        pid
      }
    })
    return product ? product : null;
  },
  async fetchByCursor({cursor}) {
    const products = await prisma.product.findMany({
      take: 5,
      skip: 1,
      orderBy: {
        createdAt: "desc",
      },
      cursor: {
        pid: cursor
      }
    })
    return products ? products : null;
  },
  async create({uid, name,type, brand, description, price, quantity, image, tags}) {
    const product = await prisma.product.create({
      data: {
        uid,
        name,
        type,
        brand,
        description,
        price,
        quantity,
        image,
        tags
      }
    });
    return product;
  },

  async searchByName(name) {
    const products = await prisma.product.findMany({
      where: {
        name
      }
    })
    return products ? products : null;
  }, 

  async searchByBrand(brand) {
    const products = await prisma.product.findMany({
      where: {
        brand
      }
    })
    return products ? products : null;
  }, 


  async searchByType(type) {
    const products = await prisma.product.findMany({
      where: {
        type
      }
    })
    return products ? products : null;
  }, 
        
}
