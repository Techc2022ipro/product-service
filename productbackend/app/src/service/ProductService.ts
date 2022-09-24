import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import {fetchProducts} from "@/parser/ProductParser";
import { ProductRepositories } from '../repositories/ProductRepository';

export const ProductService: ProductServiceInterface = {
  async createProductsService(query) {
    return await ProductRepositories.create(query);
  },
  async fetchUserProductsService(query) {
    return await ProductRepositories.userProducts(query)
  },
  async fetchProductsService() {
    return await ProductRepositories.fetch();
  }
}
