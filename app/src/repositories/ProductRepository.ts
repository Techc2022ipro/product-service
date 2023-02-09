import { ProductRepositoryInterface } from "@/interfaces/ProductInterfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepositories: ProductRepositoryInterface = {
  async fetch() {
    const products = await prisma.product.findMany( {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          comment: true
        }
      }
    );
    return products ? products : null;
  }, 

  async fetchById(pid) {
    const product = await prisma.product.findFirst({
      where: {
        pid
      },
      include: {
        comment: true
      }
    })
    return product ? product : null;
  },

  async fetchByUid(uid) {
    const products = await prisma.product.findMany({
      where: {
        uid
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    return products ? products : null;
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

  async create({uid, username, name,type, brand, description, price, quantity, image, tags}) {
    const product = await prisma.product.create({
      data: {
        uid,
        name,
        username,
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

  async edit({pid, uid, username, name, type, brand, description, price, quantity, image, tags}) {
    const product = await prisma.product.update({
      where: {
        pid
      },
      data: {
        pid,
        uid,
        username,
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

  async createComment({uid, pid, comment}) {
    const comments = await  prisma.comment.create({
      data: {
        uid,
        pid,
        comment
      }
    })
    return comments ? comments : null;
  },

  async filterByTag(tag) {
    const products = await prisma.product.findMany({
      where: {
        tags: {
          has: tag,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comment: true
      }
    })
    return products ? products : null;
  },

  async fetchTagByName(tag) {
    const tags = await prisma.tags.findFirst({
      where: {
        tag
      }
    })
    return tags ? tags : null;
  },

  async createTag(tag) {
    const tags = await prisma.tags.create({
      data: {
        tag
      }
    })
    return tags;
  },

  async fetchAllTags() {
    const tags = await prisma.tags.findMany();
    return tags ? tags : null;
  }
}
