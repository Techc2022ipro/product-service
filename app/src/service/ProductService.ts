import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import { ProductRepositories } from '../repositories/ProductRepository';

export const ProductService: ProductServiceInterface = {
  async fetchProductsService() {
    return await ProductRepositories.fetch();
  },
  async createProductsService(query) {
    return await ProductRepositories.create(query);
  },
  async searchProductsService(query) {
    return await ProductRepositories.search(query);
  }
}
