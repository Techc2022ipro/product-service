import { ProductRepositoryInterface } from "@/interfaces/ProductInterfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProductRepositories: ProductRepositoryInterface = {
    async fetch() {
        const product = await prisma.product.findMany();
        return product ? product : null;
    }
}