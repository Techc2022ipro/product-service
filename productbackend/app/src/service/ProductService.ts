import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import { ProductRepositories } from '../repositories/ProductRepository';

export const ProductService: ProductServiceInterface = {
    async fetchUserService() {
        return await ProductRepositories.fetch();
    }
}
