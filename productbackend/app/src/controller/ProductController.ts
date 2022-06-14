import { ProductControllerInterface } from "@/interfaces/ProductInterfaces";
import { ProductService } from '../service/ProductService';

export const ProductController: ProductControllerInterface = {
    async fetchProducts() {
        let products = await ProductService.fetchUserService();
        if(!products) return null;
        return products;
    }
}