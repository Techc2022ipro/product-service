import { ProductServiceInterface } from "@/interfaces/ProductInterfaces";
import {BadRequest} from "@/libraries/libs/error/Errors";
import { ProductRepositories } from '../repositories/ProductRepository';

export const ProductService: ProductServiceInterface = {

  async fetchProductsService(query) {
    if(!query.cursor) return await ProductRepositories.fetch();
    return await ProductRepositories.fetchByCursor(query);
  },

  async createProductsService(query) {
    return await ProductRepositories.create(query);
  },

  async searchProductsService(query) {
    if(query.slug === "name") {
      return await ProductRepositories.searchByName(query.keyword);
    }

    else if(query.slug === "brand") {
      return await ProductRepositories.searchByBrand(query.keyword);
    } 

    else if(query.slug === "type") {
      return await ProductRepositories.searchByType(query.keyword);
    } 

    else {
      throw new BadRequest();
    }
  }
}
