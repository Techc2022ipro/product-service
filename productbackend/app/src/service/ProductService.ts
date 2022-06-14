import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import { ProductRepositories } from '../repositories/ProductRepository';

export const ProductService: ProductServiceInterface = {
    async fetchProductService() {
        return await ProductRepositories.fetch();
    }
}